import { useEffect, useRef, useState } from "react";
import { defenseLayers, diagnosisChecks, purdueLevels } from "@/content/mapoca";

const INK = 0x121416;
const STEEL = 0x3d5160;
const PAPER = 0xf4f3f0;
const RING = 0xb7c0c6;

export function DefenseStage() {
  const host = useRef<HTMLDivElement>(null);
  const [layer, setLayer] = useState(0);
  const [ready, setReady] = useState(false);
  const layerRef = useRef(0);
  layerRef.current = layer;
  const active = defenseLayers[layer] ?? defenseLayers[0];

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let stopped = false;
    let cleanup = () => {};

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    (async () => {
      try {
      const THREE = await import("three/webgpu");
      const { color, mix, positionLocal, sin, time, uniform } = await import("three/tsl");
      if (stopped || !el.isConnected) return;

      const renderer = new THREE.WebGPURenderer({ antialias: true });
      await renderer.init();
      if (stopped) {
        renderer.dispose();
        return;
      }

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
      renderer.setClearColor(INK, 1);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 40);
      camera.position.set(0.1, 0.35, 5.6);

      scene.add(new THREE.AmbientLight(PAPER, 0.35));
      const key = new THREE.DirectionalLight(PAPER, 3.4);
      key.position.set(3.5, 4.2, 5);
      scene.add(key);
      const fill = new THREE.DirectionalLight(STEEL, 1.4);
      fill.position.set(-4, -1.5, 2);
      scene.add(fill);

      const root = new THREE.Group();
      scene.add(root);

      const coreMat = new THREE.MeshStandardNodeMaterial();
      coreMat.metalness = 0.85;
      coreMat.roughness = 0.22;
      coreMat.colorNode = color(PAPER);
      if (!reduced) {
        coreMat.positionNode = positionLocal.add(sin(time.mul(1.4)).mul(0.015));
      }
      const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.52, 1), coreMat);
      root.add(core);

      const rings: { mesh: InstanceType<typeof THREE.Mesh>; emphasis: { value: number } }[] = [];
      const radii = [1.15, 1.7, 2.25, 2.85];
      const nodeGeo = new THREE.SphereGeometry(0.07, 20, 16);

      radii.forEach((radius, index) => {
        const emphasis = uniform(0);
        const material = new THREE.MeshStandardNodeMaterial();
        material.metalness = 0.78;
        material.roughness = 0.26;
        material.colorNode = mix(color(RING), color(PAPER), emphasis);
        const mesh = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.028, 20, 180), material);
        mesh.rotation.x = 1.05 + index * 0.22;
        mesh.rotation.y = index * 0.55;
        root.add(mesh);

        const count = 5 + index * 2;
        for (let n = 0; n < count; n += 1) {
          const angle = (n / count) * Math.PI * 2;
          const nodeMat = new THREE.MeshStandardNodeMaterial();
          nodeMat.metalness = 0.4;
          nodeMat.roughness = 0.45;
          nodeMat.colorNode = mix(color(RING), color(PAPER), emphasis);
          const node = new THREE.Mesh(nodeGeo, nodeMat);
          node.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
          mesh.add(node);
        }
        rings.push({ mesh, emphasis });
      });

      const dots = new Float32Array(90 * 3);
      for (let i = 0; i < 90; i += 1) {
        const radius = 3.3 + Math.random() * 0.8;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        dots[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        dots[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.55;
        dots[i * 3 + 2] = radius * Math.cos(phi);
      }
      const dotGeo = new THREE.BufferGeometry();
      dotGeo.setAttribute("position", new THREE.BufferAttribute(dots, 3));
      root.add(new THREE.Points(dotGeo, new THREE.PointsMaterial({ color: RING, size: 0.03, transparent: true, opacity: 0.7 })));

      const pointer = { x: 0, y: 0 };
      const onMove = (event: PointerEvent) => {
        const rect = el.getBoundingClientRect();
        pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 0.5;
        pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 0.35;
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
      const scaleTarget = new THREE.Vector3(1, 1, 1);
      renderer.setAnimationLoop(() => {
        timer.update();
        const t = timer.getElapsed();
        rings.forEach((ring, index) => {
          ring.emphasis.value = layerRef.current === index ? 1 : 0;
          const target = layerRef.current === index ? 1.04 : 1;
          scaleTarget.set(target, target, target);
          ring.mesh.scale.lerp(scaleTarget, 0.08);
          if (!reduced) ring.mesh.rotation.z += index % 2 === 0 ? 0.0014 : -0.0011;
        });
        if (!reduced) {
          root.rotation.y = t * 0.12;
          core.rotation.y = -t * 0.35;
        }
        root.rotation.x += (pointer.y - root.rotation.x) * 0.04;
        root.rotation.z += (pointer.x * 0.4 - root.rotation.z) * 0.04;
        renderer.render(scene, camera);
      });
      setReady(true);

      cleanup = () => {
        renderer.setAnimationLoop(null);
        timer.disconnect();
        observer.disconnect();
        el.removeEventListener("pointermove", onMove);
        core.geometry.dispose();
        nodeGeo.dispose();
        dotGeo.dispose();
        rings.forEach((ring) => ring.mesh.geometry.dispose());
        renderer.dispose();
        renderer.domElement.remove();
      };
      } catch (error) {
        if (!stopped) el.dataset.lattice = error instanceof Error ? error.message : "fallo";
      }
    })();

    return () => {
      stopped = true;
      cleanup();
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl bg-inverse text-inverse-fg">
      <div ref={host} className="relative h-72 md:h-96" role="img" aria-label="Modelo tridimensional de cuatro capas de defensa: identidad, perímetro, superficie y continuidad.">
        {ready ? null : <div className="absolute inset-0 bg-inverse" />}
      </div>
      <div className="border-t border-inverse-line px-5 py-5">
        <p className="text-xs font-medium tracking-widest text-inverse-muted uppercase">{active.kicker}</p>
        <p className="mt-1 font-display text-3xl leading-display">{active.name}</p>
        <p className="mt-2 text-sm text-inverse-muted">{active.text}</p>
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
  return (
    <section id="defensa" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
        <p className="text-xs font-medium tracking-widest text-muted uppercase">Ciberseguridad</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl leading-display md:text-5xl">
          Cuatro capas para la oficina. Cinco niveles cuando hay planta.
        </h2>
        <p className="mt-5 max-w-2xl text-muted">
          No se protege “todo” al mismo tiempo. Primero se sabe quién entra, qué redes se tocan y qué no puede parar.
          En industria, ese mapa es el modelo Purdue: la oficina y el proceso no viven en el mismo segmento.
        </p>
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="font-display text-3xl leading-display">Lo que mira el diagnóstico</h3>
            <ul className="mt-6">
              {diagnosisChecks.map((item) => (
                <li key={item.t} className="border-t border-line py-4">
                  <p className="font-semibold">{item.t}</p>
                  <p className="mt-1 text-sm text-muted">{item.d}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <h3 className="font-display text-3xl leading-display">Modelo Purdue</h3>
            <p className="mt-3 max-w-xl text-sm text-muted">
              MAPOCA INDUSTRIAL SECURE parte de este corte para segmentar IT y OT, inventariar activos y decidir por dónde puede entrar un acceso remoto.
            </p>
            <ol className="mt-6">
              {purdueLevels.map((item) => (
                <li key={item.level} className="grid grid-cols-12 gap-4 border-t border-line py-4">
                  <p className="col-span-3 font-display text-2xl text-muted sm:col-span-2">{item.level}</p>
                  <div className="col-span-9 sm:col-span-10">
                    <p className="font-semibold">{item.name}</p>
                    <p className="mt-1 text-sm text-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
