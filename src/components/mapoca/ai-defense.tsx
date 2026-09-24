import { memo } from "react";
import { BrainCircuit, MessagesSquare, ScanSearch, UserX } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

const threats: { icon: typeof BrainCircuit; title: string; text: string }[] = [
  {
    icon: MessagesSquare,
    title: "Suplantación con IA",
    text: "Voces clonadas, correos perfectos y mensajes del «jefe» pidiendo una transferencia urgente. El defraudante ya no necesita equivocarse al escribir: la máquina lo hace por él.",
  },
  {
    icon: UserX,
    title: "Robo de identidad",
    text: "Con unos segundos de audio y unas fotos públicas basta para fabricar una identidad falsa. Los datos personales que circulan en la red son la materia prima del fraude.",
  },
  {
    icon: BrainCircuit,
    title: "Deepfakes",
    text: "Videos y audios imposibles de distinguir de un real. Antes de pagar, autorizar un cambio de cuenta o cumplir una instrucción, hay que verificar por otro canal.",
  },
  {
    icon: ScanSearch,
    title: "Ingeniería social aumentada",
    text: "La IA redacta engaños a medida, en el tono correcto y en el momento exacto. Un solo empleado convencido puede abrir la puerta a toda la organización.",
  },
];

const training: { step: string; title: string; text: string }[] = [
  {
    step: "01",
    title: "Dudar es la primera defensa",
    text: "Pautas simples contra la urgencia artificial: toda solicitud de dinero, claves o cambios de cuenta se confirma por un segundo canal, aunque «suene» conocida.",
  },
  {
    step: "02",
    title: "Detectar señales de síntesis",
    text: "Entrenar el ojo y el oído: audio demasiado limpio, palabras fuera del estilo habitual, errores sutiles en dominios y direcciones de correo.",
  },
  {
    step: "03",
    title: "Reaccionar sin pánico",
    text: "Protocolos claros de reporte: a quién avisar, qué guardar y qué hacer en los primeros minutos. Reportar rápido vale más que tener todas las respuestas.",
  },
];

export const AiDefense = memo(function AiDefense() {
  return (
    <section id="ia" className="border-t border-line bg-inverse text-inverse-fg">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-widest text-brand-red uppercase">
              Amenazas emergentes
            </p>
            <h2 className="mt-3 font-display text-4xl leading-display md:text-5xl">
              La inteligencia artificial también abre la puerta. Nosotros aprendimos a vigilarla.
            </h2>
            <p className="mt-5 text-inverse-muted">
              MAPOCA TELECOM es consciente de los nuevos riesgos que trae la llegada masiva de la
              inteligencia artificial: herramientas capaces de robar identidades, imitar voces y
              engañar personas con una precisión que hace cinco años era impensable. Detectar esos
              engaños —antes de que alguien pague, firme o entregue una clave— también es parte de
              nuestro trabajo.
            </p>
            <p className="mt-4 font-display text-xl italic">
              No solo protegemos las máquinas: blindamos al recurso humano.
            </p>
            <div className="mt-8">
              <ButtonLink href="#contacto" variant="inverse">
                Agendar capacitación para mi equipo
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {threats.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-inverse-line bg-inverse p-5 transition-colors duration-150 ease-out hover:border-brand-red"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-red text-inverse-fg">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-2xl leading-display">{item.title}</h3>
                <p className="mt-2 text-sm text-inverse-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-inverse-line pt-10">
          <p className="text-xs font-medium tracking-widest text-brand-red uppercase">
            Capacitaciones en pensamiento crítico
          </p>
          <h3 className="mt-3 max-w-2xl font-display text-3xl leading-display md:text-4xl">
            Personas entrenadas detectan lo que ningún filtro automático atrapa
          </h3>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {training.map((item) => (
              <article key={item.step}>
                <p className="font-display text-3xl text-brand-red">{item.step}</p>
                <h4 className="mt-3 font-display text-2xl leading-display">{item.title}</h4>
                <p className="mt-2 text-sm text-inverse-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
