import { memo, useEffect, useRef, useState } from "react";
import { lines, recommend, type Pain, type Size } from "@/content/mapoca";
import { ButtonLink } from "@/components/ui/button-link";

const sizes: { id: Size; label: string; hint: string }[] = [
  { id: "micro", label: "Microempresa", hint: "Pocos equipos y sin área de TI." },
  { id: "pyme", label: "PyME", hint: "Oficina, usuarios y proveedores que coordinar." },
  { id: "planta", label: "Planta o almacén", hint: "La operación no puede parar." },
];

// Mapa id → línea: lookup O(1) en lugar de lines.find(...) en cada render.
const lineById = new Map(lines.map((line) => [line.id, line]));

export const Matcher = memo(function Matcher({
  onRecommend,
}: {
  onRecommend: (lineName: string) => void;
}) {
  const [size, setSize] = useState<Size | null>(null);
  const [pain, setPain] = useState<Pain | null>(null);
  const [show, setShow] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const result = size && pain && show ? recommend(size, pain) : null;
  const line = result ? lineById.get(result.lineId) : undefined;

  useEffect(() => {
    if (!line) return;
    onRecommend(line.name);
    resultRef.current?.focus();
  }, [line, onRecommend]);

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <p className="text-xs font-medium tracking-widest text-muted uppercase">Orientación</p>
        <h2 className="mt-3 font-display text-4xl leading-display">Qué línea encaja</h2>
        <p className="mt-4 max-w-md text-muted">
          Dos preguntas para ubicar el punto de partida. La propuesta real sale del diagnóstico, no
          de este recuadro.
        </p>
      </div>
      <div className="lg:col-span-7">
        <fieldset>
          <legend className="text-sm font-semibold">¿Cómo es la operación?</legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {sizes.map((item) => {
              const active = size === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setSize(item.id);
                    setShow(false);
                  }}
                  className={
                    active
                      ? "min-h-11 rounded-2xl border border-ink bg-ink px-4 py-3 text-left text-paper"
                      : "min-h-11 rounded-2xl border border-line bg-panel px-4 py-3 text-left hover:border-ink"
                  }
                >
                  <span className="block text-sm font-semibold">{item.label}</span>
                  <span
                    className={
                      active
                        ? "mt-1 block text-sm text-inverse-muted"
                        : "mt-1 block text-sm text-muted"
                    }
                  >
                    {item.hint}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>
        <fieldset className="mt-6">
          <legend className="text-sm font-semibold">¿Qué hay que resolver primero?</legend>
          <div className="mt-3 grid gap-2">
            {pains.map((item) => {
              const active = pain === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setPain(item.id);
                    setShow(false);
                  }}
                  className={
                    active
                      ? "min-h-11 rounded-2xl border border-ink bg-ink px-4 py-3 text-left text-sm font-medium text-paper"
                      : "min-h-11 rounded-2xl border border-line bg-panel px-4 py-3 text-left text-sm font-medium hover:border-ink"
                  }
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </fieldset>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            disabled={!size || !pain}
            onClick={() => setShow(true)}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-paper transition-transform duration-150 ease-out active:scale-[0.96] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Ver recomendación
          </button>
          {show ? (
            <button
              type="button"
              onClick={() => {
                setSize(null);
                setPain(null);
                setShow(false);
              }}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-line px-5 text-sm font-semibold"
            >
              Empezar de nuevo
            </button>
          ) : null}
        </div>
        {result && line ? (
          <div
            ref={resultRef}
            tabIndex={-1}
            className="mt-6 rounded-3xl border border-line bg-panel p-6 outline-none"
          >
            <p className="text-xs font-medium tracking-widest text-muted uppercase">{line.index}</p>
            <h3 className="mt-2 font-display text-3xl leading-display">{line.name}</h3>
            <p className="mt-3 text-muted">{result.why}</p>
            <ButtonLink href="#contacto" className="mt-5">
              Pedir diagnóstico
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </div>
  );
});
