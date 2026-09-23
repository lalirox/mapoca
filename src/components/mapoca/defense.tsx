import { useEffect, useRef, useState } from "react";
import { containment, defenseLayers, diagnosisChecks, purdueLevels } from "@/content/mapoca";

const INK = 0x121416;
const STEEL = 0x3d5160;
const PAPER = 0xf4f3f0;
const RING = 0xb7c0c6;

const PURDUE_Y = [1.42, 0.71, 0, -0.71, -1.42];
const PURDUE_R = [1.22, 1.02, 0.84, 0.66, 0.48];

function useStage(build: (el: HTMLDivElement, signal: { stopped: () => boolean }) => Promise<() => void>) {
  const host = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let stopped = false;
    let release = () => {};
    let finished = false;

    build(el, { stopped: () => stopped })
      .then((cleanup) => {
        release = cleanup;
        finished = true;
        if (stopped) cleanup();
        else setReady(true);
      })
      .catch((error: unknown) => {
        if (!stopped) el.dataset.lattice = error instanceof Error ? error.message : "fallo";
      });

    return () => {
      stopped = true;
      if (finished) release();
    };
  }, [build]);

  return { host, ready };
}

export function DefenseStage() {
  const layerRef = useRef(0);
  const [layer, setLayer] = useState(0);
  layerRef.current = layer;
  const active = defenseLayers[layer] ?? defenseLayers[0];

  const build = useRef(async (el: HTMLDivElement, signal: { stopped: () => boolean }) => {
    const THREE = await import("three/webgpu");
    const { color, float, mix, pass, positionLocal, sin, time, uniform } = await import("three/tsl");
    const { bloom } = await import("three/addons/tsl/display/BloomNode.js");
    const { RoomEnvironment } = await import("three/addons/environments/RoomEnvironment.js");
    if (signal.stopped()) return () => {};

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    const renderer = new THREE.WebGPURenderer({ antialias: true });
    await renderer.init();
    if (signal.stopped()) {
      renderer.dispose();
      return () => {};
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, wide ? 1.5 : 1.25));
    renderer.setClearColor(INK, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    const canvas = renderer.domElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    el.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 40);
    camera.position.set(0.2, 0.38, 5.35);

    let envTexture: InstanceType<typeof THREE.Texture> | null = null;
    const pmrem = new THREE.PMREMGenerator(renderer);
    try {
      const env = pmrem.fromScene(new RoomEnvironment(), 0);
      scene.environment = env.texture;
      envTexture = env.texture;
    } catch {
      envTexture = null;
    }

    scene.add(new THREE.AmbientLight(PAPER, 0.18));
    const key = new THREE.DirectionalLight(PAPER, 3.1);
    key.position.set(3.2, 4.4, 4.2);
    scene.add(key);
    const rim = new THREE.DirectionalLight(STEEL, 2.4);
    rim.position.set(-4.5, 1.2, -2.4);
    scene.add(rim);
    const coreLight = new THREE.PointLight(PAPER, 4.5, 4.2);
    scene.add(coreLight);

    const root = new THREE.Group();
    scene.add(root);

    const coreMat = new THREE.MeshPhysicalNodeMaterial();
    coreMat.metalness = 0.08;
    coreMat.roughness = 0.06;
    coreMat.clearcoat = 1;
    coreMat.clearcoatRoughness = 0.16;
    coreMat.iridescence = 0.22;
    coreMat.transmission = 0.86;
    coreMat.thickness = 0.7;
    coreMat.ior = 1.45;
    coreMat.colorNode = color(PAPER);
    if (!reduced) coreMat.positionNode = positionLocal.add(sin(time.mul(1.2)).mul(0.012));
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.46, 1), coreMat);
    root.add(core);

    const wireMat = new THREE.MeshBasicNodeMaterial();
    wireMat.colorNode = color(RING);
    wireMat.wireframe = true;
    wireMat.transparent = true;
    wireMat.opacity = 0.45;
    const wire = new THREE.Mesh(new THREE.IcosahedronGeometry(0.74, 1), wireMat);
    root.add(wire);

    type Ring = {
      mesh: InstanceType<typeof THREE.Mesh>;
      emphasis: { value: number };
      signal: InstanceType<typeof THREE.Mesh>;
    };
    const rings: Ring[] = [];
    const radii = [1.12, 1.68, 2.22, 2.82];
    const nodeGeo = new THREE.SphereGeometry(0.055, 20, 14);
    const signalGeo = new THREE.SphereGeometry(0.07, 24, 16);

    radii.forEach((radius, index) => {
      const emphasis = uniform(0);
      const material = new THREE.MeshPhysicalNodeMaterial();
      material.metalness = 0.86;
      material.roughness = 0.18;
      material.clearcoat = 0.7;
      const sheen = sin(positionLocal.x.mul(2.1).add(time.mul(0.9)).add(float(index))).mul(0.5).add(0.5);
      const base = mix(color(RING), color(PAPER), emphasis);
      material.colorNode = mix(base, color(PAPER), sheen.mul(0.42));
      const mesh = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.02, 16, 180), material);
      mesh.rotation.x = 1.02 + index * 0.18;
      mesh.rotation.y = index * 0.48;
      root.add(mesh);

      const count = 4 + index;
      for (let n = 0; n < count; n += 1) {
        const angle = (n / count) * Math.PI * 2;
        const nodeMat = new THREE.MeshStandardNodeMaterial();
        nodeMat.metalness = 0.55;
        nodeMat.roughness = 0.32;
        nodeMat.colorNode = mix(color(RING), color(PAPER), emphasis);
        const node = new THREE.Mesh(nodeGeo, nodeMat);
        node.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
        mesh.add(node);
      }

      const signalMat = new THREE.MeshStandardNodeMaterial();
      signalMat.colorNode = color(PAPER);
      signalMat.emissive = new THREE.Color(PAPER);
      signalMat.emissiveIntensity = 0.85;
      signalMat.roughness = 0.2;
      signalMat.metalness = 0.2;
      const signal = new THREE.Mesh(signalGeo, signalMat);
      signal.position.set(radius, 0, 0);
      mesh.add(signal);
      rings.push({ mesh, emphasis, signal });
    });

    const scanLife = uniform(0.2);
    const scanMat = new THREE.MeshBasicNodeMaterial();
    scanMat.colorNode = color(RING);
    scanMat.transparent = true;
    scanMat.opacityNode = scanLife;
    scanMat.depthWrite = false;
    const scan = new THREE.Mesh(new THREE.TorusGeometry(1, 0.008, 8, 128), scanMat);
    scan.rotation.x = Math.PI / 2;
    root.add(scan);

    let seed = 7;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    const dots = new Float32Array(110 * 3);
    for (let i = 0; i < 110; i += 1) {
      const radius = 3.15 + rand() * 0.9;
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      dots[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      dots[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.62;
      dots[i * 3 + 2] = radius * Math.cos(phi);
    }
    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute("position", new THREE.BufferAttribute(dots, 3));
    const dust = new THREE.Points(
      dotGeo,
      new THREE.PointsMaterial({ color: RING, size: 0.022, transparent: true, opacity: 0.55 }),
    );
    root.add(dust);

    const pointer = { x: 0, y: 0 };
    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 0.45;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 0.28;
    };
    el.addEventListener("pointermove", onMove);

    const resize = () => {
      const width = el.clientWidth || 1;
      const height = el.clientHeight || 1;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(el);
    resize();

    let renderFrame = () => renderer.render(scene, camera);
    let bloomNode: { dispose: () => void } | null = null;
    let pipeline: InstanceType<typeof THREE.RenderPipeline> | null = null;
    if (wide) {
      try {
        const scenePass = pass(scene, camera);
        const colorNode = scenePass.getTextureNode("output");
        const bloomPass = bloom(colorNode, 0.28, 0.32, 0.72);
        bloomNode = bloomPass;
        pipeline = new THREE.RenderPipeline(renderer);
        pipeline.outputNode = colorNode.add(bloomPass);
        renderFrame = () => pipeline?.render();
      } catch {
        pipeline = null;
      }
    }

    const timer = new THREE.Timer();
    timer.connect(document);
    const scaleTarget = new THREE.Vector3(1, 1, 1);
    let failed = false;
    renderer.setAnimationLoop(() => {
      if (failed || signal.stopped()) return;
      try {
        timer.update();
        const t = timer.getElapsed();
        rings.forEach((ring, index) => {
          const on = layerRef.current === index;
          ring.emphasis.value = on ? 1 : 0;
          const target = on ? 1.045 : 1;
          scaleTarget.set(target, target, target);
          ring.mesh.scale.lerp(scaleTarget, 0.08);
          ring.signal.scale.setScalar(on ? 1.45 : 0.85);
          if (!reduced) ring.mesh.rotation.z += index % 2 === 0 ? 0.0016 : -0.0012;
        });
        if (!reduced) {
          root.rotation.y = t * 0.08;
          core.rotation.y = -t * 0.28;
          wire.rotation.y = t * 0.12;
          const span = (t * 0.18) % 1;
          scan.scale.setScalar(0.35 + span * 2.7);
          scanLife.value = (1 - span) * 0.4;
        } else {
          scan.scale.setScalar(1.8);
          scanLife.value = 0.16;
        }
        root.rotation.x += (pointer.y * 0.35 - root.rotation.x) * 0.045;
        root.rotation.z += (pointer.x * 0.35 - root.rotation.z) * 0.045;
        renderFrame();
      } catch (error) {
        failed = true;
        el.dataset.lattice = error instanceof Error ? error.message : "fallo";
      }
    });

    return () => {
      renderer.setAnimationLoop(null);
      timer.disconnect();
      observer.disconnect();
      el.removeEventListener("pointermove", onMove);
      bloomNode?.dispose();
      pipeline?.dispose();
      envTexture?.dispose();
      pmrem?.dispose();
      core.geometry.dispose();
      wire.geometry.dispose();
      nodeGeo.dispose();
      signalGeo.dispose();
      scan.geometry.dispose();
      dotGeo.dispose();
      rings.forEach((ring) => ring.mesh.geometry.dispose());
      renderer.dispose();
      canvas.remove();
    };
  });

  const { host, ready } = useStage(build.current);

  return (
    <div className="overflow-hidden rounded-3xl bg-inverse text-inverse-fg">
      <div
        ref={host}
        className="relative h-72 md:h-[22rem]"
        role="img"
        aria-label={`Modelo tridimensional de cuatro capas de defensa. Capa activa: ${active.name}. ${active.text}`}
      >
        {ready ? null : <div className="absolute inset-0 bg-inverse" />}
      </div>
      <div className="border-t border-inverse-line px-5 py-5">
        <div className="flex items-baseline justify-between gap-4">
          <p className="text-xs font-medium tracking-widest text-inverse-muted uppercase">{active.kicker}</p>
          <p className="font-display text-sm text-inverse-muted">0{layer + 1} / 04</p>
        </div>
        <p className="mt-1 font-display text-3xl leading-display">{active.name}</p>
        <p className="mt-2 text-sm text-inverse-muted">{active.text}</p>
        <ul className="mt-4 space-y-1.5">
          {active.practices.map((item) => (
            <li key={item} className="border-l border-inverse-line pl-3 text-sm text-inverse-fg">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4" role="tablist" aria-label="Capas de defensa">
          {defenseLayers.map((item, index) => {
            const selected = index === layer;
            return (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setLayer(index)}
                className={
                  selected
                    ? "min-h-11 rounded-full bg-paper px-3 text-sm font-semibold text-ink"
                    : "min-h-11 rounded-full border border-inverse-line px-3 text-sm font-medium text-inverse-fg"
                }
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function DefenseDetail() {
  const [level, setLevel] = useState(1);
  const levelRef = useRef(1);
  levelRef.current = level;
  const current = purdueLevels[level] ?? purdueLevels[1];

  const build = useRef(async (el: HTMLDivElement, signal: { stopped: () => boolean }) => {
    const THREE = await import("three/webgpu");
    const { color, mix, uniform } = await import("three/tsl");
    if (signal.stopped()) return () => {};

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new THREE.WebGPURenderer({ antialias: true });
    await renderer.init();
    if (signal.stopped()) {
      renderer.dispose();
      return () => {};
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));
    renderer.setClearColor(INK, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    const canvas = renderer.domElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    el.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 40);
    camera.position.set(2.35, 1.05, 3.55);
    camera.lookAt(0, 0, 0);

    scene.add(new THREE.AmbientLight(PAPER, 0.28));
    const key = new THREE.DirectionalLight(PAPER, 2.8);
    key.position.set(3, 5, 4);
    scene.add(key);
    const fill = new THREE.DirectionalLight(STEEL, 1.5);
    fill.position.set(-3, -2, 2);
    scene.add(fill);

    const root = new THREE.Group();
    scene.add(root);

    const spine = new THREE.Mesh(
      new THREE.CylinderGeometry(0.018, 0.018, 3.15, 12),
      new THREE.MeshStandardMaterial({ color: RING, metalness: 0.8, roughness: 0.28 }),
    );
    root.add(spine);

    type Floor = { mesh: InstanceType<typeof THREE.Mesh>; emphasis: { value: number }; ring: InstanceType<typeof THREE.Mesh> };
    const floors: Floor[] = [];
    const discGeo = new THREE.CylinderGeometry(1, 1, 0.045, 64);
    const rimGeo = new THREE.TorusGeometry(1, 0.012, 8, 80);

    PURDUE_Y.forEach((y, index) => {
      const emphasis = uniform(0);
      const material = new THREE.MeshPhysicalNodeMaterial();
      material.metalness = 0.78;
      material.roughness = 0.24;
      material.clearcoat = 0.55;
      material.colorNode = mix(color(STEEL), color(PAPER), emphasis);
      material.emissiveNode = color(PAPER).mul(emphasis.mul(0.45));
      const mesh = new THREE.Mesh(discGeo, material);
      mesh.scale.setScalar(PURDUE_R[index] ?? 1);
      mesh.position.y = y;
      root.add(mesh);

      const rimMat = new THREE.MeshStandardNodeMaterial();
      rimMat.metalness = 0.7;
      rimMat.roughness = 0.25;
      rimMat.colorNode = mix(color(RING), color(PAPER), emphasis);
      const ring = new THREE.Mesh(rimGeo, rimMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = y + 0.03;
      ring.scale.setScalar(PURDUE_R[index] ?? 1);
      root.add(ring);
      floors.push({ mesh, emphasis, ring });
    });

    const packetGeo = new THREE.SphereGeometry(0.055, 16, 12);
    const packetMat = new THREE.MeshStandardMaterial({
      color: PAPER,
      emissive: PAPER,
      emissiveIntensity: 0.7,
      roughness: 0.25,
      metalness: 0.15,
    });
    const packets = Array.from({ length: 8 }, () => {
      const mesh = new THREE.Mesh(packetGeo, packetMat);
      root.add(mesh);
      return mesh;
    });

    let visible = true;
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
    });
    visibility.observe(el);

    const pointer = { x: 0, y: 0 };
    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      pointer.x = (event.clientX - rect.left) / rect.width - 0.5;
      pointer.y = (event.clientY - rect.top) / rect.height - 0.5;
    };
    el.addEventListener("pointermove", onMove);

    const resize = () => {
      const width = el.clientWidth || 1;
      const height = el.clientHeight || 1;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(el);
    resize();

    const timer = new THREE.Timer();
    timer.connect(document);
    const scaleTarget = new THREE.Vector3();
    const ringScale = new THREE.Vector3();
    renderer.setAnimationLoop(() => {
      if (!visible || signal.stopped()) return;
      timer.update();
      const t = reduced ? 0.4 : timer.getElapsed();
      const index = levelRef.current;
      const targetY = PURDUE_Y[index] ?? 0;
      const radius = (PURDUE_R[index] ?? 1) * 0.9;
      floors.forEach((floor, floorIndex) => {
        const on = floorIndex === index;
        floor.emphasis.value = on ? 1 : 0;
        const s = PURDUE_R[floorIndex] ?? 1;
        const next = on ? s * 1.04 : s;
        scaleTarget.set(next, 1, next);
        floor.mesh.scale.lerp(scaleTarget, 0.08);
        ringScale.set(next, next, next);
        floor.ring.scale.lerp(ringScale, 0.08);
      });
      packets.forEach((packet, packetIndex) => {
        const cycle = reduced ? 0.7 : (t * 0.26 + packetIndex / packets.length) % 1;
        if (cycle < 0.62) {
          const u = cycle / 0.62;
          const y = 1.72 + (targetY - 1.72) * u;
          const spin = packetIndex * 0.8 + t * 0.55;
          const r = 0.12 + (radius - 0.12) * u;
          packet.position.set(Math.cos(spin) * r, y, Math.sin(spin) * r * 0.72);
        } else {
          const a = ((cycle - 0.62) / 0.38) * Math.PI * 2 + packetIndex;
          packet.position.set(Math.cos(a) * radius, targetY + 0.09, Math.sin(a) * radius * 0.72);
        }
      });
      if (!reduced) root.rotation.y = t * 0.12;
      root.rotation.x += (pointer.y * 0.18 - root.rotation.x) * 0.05;
      root.rotation.z += (-pointer.x * 0.12 - root.rotation.z) * 0.05;
      renderer.render(scene, camera);
    });

    return () => {
      renderer.setAnimationLoop(null);
      timer.disconnect();
      observer.disconnect();
      visibility.disconnect();
      el.removeEventListener("pointermove", onMove);
      discGeo.dispose();
      rimGeo.dispose();
      packetGeo.dispose();
      spine.geometry.dispose();
      renderer.dispose();
      canvas.remove();
    };
  });

  const { host, ready } = useStage(build.current);

  return (
    <section id="defensa" className="bg-inverse text-inverse-fg">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <p className="text-xs font-medium tracking-widest text-inverse-muted uppercase">Ciberseguridad</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl leading-display md:text-5xl">
          Cuatro capas para la oficina. Cinco niveles cuando hay planta.
        </h2>
        <p className="mt-5 max-w-2xl text-inverse-muted">
          No se protege “todo” al mismo tiempo. Primero se sabe quién entra, qué redes se tocan y qué no puede parar.
          En industria, ese mapa es el modelo Purdue: la oficina y el proceso no viven en el mismo segmento.
        </p>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-inverse-line">
              <div
                ref={host}
                className="relative h-96 lg:h-[34rem]"
                role="img"
                aria-label={`Corte Purdue. El tráfico baja hasta ${current.name}, nivel ${current.level}. ${current.gate}`}
              >
                {ready ? null : <div className="absolute inset-0 bg-inverse" />}
              </div>
            </div>
            <p className="mt-3 text-sm text-inverse-muted">
              Ilustración del corte. Los puntos bajan hasta la capa que eliges. En una planta sana, se detienen en la DMZ.
            </p>
          </div>
          <div className="lg:col-span-7">
            <h3 className="font-display text-3xl leading-display">Modelo Purdue</h3>
            <p className="mt-3 max-w-xl text-sm text-inverse-muted">
              MAPOCA INDUSTRIAL SECURE parte de este corte para segmentar IT y OT, inventariar activos y decidir por dónde
              puede entrar un acceso remoto.
            </p>
            <div className="mt-6" role="tablist" aria-label="Niveles Purdue">
              {purdueLevels.map((item, index) => {
                const selected = index === level;
                return (
                  <button
                    key={item.level}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setLevel(index)}
                    className={
                      selected
                        ? "grid w-full grid-cols-12 gap-4 border-t border-paper py-4 text-left"
                        : "grid w-full grid-cols-12 gap-4 border-t border-inverse-line py-4 text-left"
                    }
                  >
                    <p className="col-span-3 font-display text-2xl text-inverse-muted sm:col-span-2">{item.level}</p>
                    <span className="col-span-9 sm:col-span-10">
                      <span className="block font-semibold">{item.name}</span>
                      <span className="mt-1 block text-sm text-inverse-muted">{item.text}</span>
                      {selected ? <span className="mt-1 block text-sm text-inverse-fg">{item.gate}</span> : null}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-inverse-line pt-10">
          <h3 className="font-display text-3xl leading-display">Lo que mira el diagnóstico</h3>
          <ul className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {diagnosisChecks.map((item, index) => (
              <li key={item.t} className="border-t border-inverse-line py-4">
                <p className="text-xs tracking-widest text-inverse-muted">0{index + 1}</p>
                <p className="mt-2 font-semibold">{item.t}</p>
                <p className="mt-1 text-sm text-inverse-muted">{item.d}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 border-t border-inverse-line pt-10">
          <h3 className="max-w-2xl font-display text-3xl leading-display">Si algo ya pasó</h3>
          <p className="mt-3 max-w-2xl text-sm text-inverse-muted">
            No hay un porcentaje de seguridad ni un centro de operaciones prometido en el sitio. Hay un orden. El alcance
            y el tiempo se escriben en la propuesta.
          </p>
          <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {containment.map((item) => (
              <li key={item.n}>
                <p className="font-display text-2xl text-inverse-muted">{item.n}</p>
                <p className="mt-2 font-semibold">{item.t}</p>
                <p className="mt-2 text-sm text-inverse-muted">{item.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
