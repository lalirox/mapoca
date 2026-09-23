import { useCallback, useState } from "react";
import { Plus } from "lucide-react";
import {
  COMPANY,
  CONTACT_NAME,
  DEFAULT_NOTE,
  EMAIL,
  LEGAL,
  PHONE_DISPLAY,
  PHONE_TEL,
  RECOMMENDATION,
  SLOGAN,
  faqs,
  heroFor,
  lineById,
  models,
  pillars,
  specialized,
  steps,
  whatsappHref,
  workSheet,
  lines,
} from "@/content/mapoca";
import { ButtonLink } from "@/components/ui/button-link";
import { Header } from "@/components/mapoca/header";
import { Matcher } from "@/components/mapoca/matcher";
import { Contact } from "@/components/mapoca/contact";
import { DefenseDetail, DefenseStage } from "@/components/mapoca/defense";

export function HomePage({ servicio }: { servicio?: string }) {
  const hero = heroFor(servicio);
  const focus = lineById(hero.lineId);
  const [picked, setPicked] = useState<string | undefined>(focus?.name);
  const onRecommend = useCallback((name: string) => setPicked(name), []);

  return (
    <div className="pb-24 md:pb-0">
      <div className="h-1 bg-ink" />
      <Header />
      <main id="contenido">
        <section id="inicio" className="mx-auto grid max-w-6xl gap-12 px-5 py-12 lg:grid-cols-12 lg:items-start lg:py-16">
          <div className="lg:col-span-7">
            <p className="rise text-xs font-medium tracking-widest text-muted uppercase">{hero.kicker}</p>
            <h1 className="rise rise-2 mt-4 max-w-3xl font-display text-4xl leading-display md:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="rise rise-3 mt-5 max-w-xl text-lg text-muted">{hero.lede}</p>
            <p className="rise rise-3 mt-4 font-display text-xl italic text-ink">{SLOGAN}</p>
            <div className="rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#contacto">Hablar con {CONTACT_NAME}</ButtonLink>
              <ButtonLink href="#servicios" variant="secondary">
                Ver las seis líneas
              </ButtonLink>
            </div>
            <p className="rise rise-4 mt-6 text-sm text-muted">
              {CONTACT_NAME} ·{" "}
              <a className="underline decoration-line underline-offset-4" href={`tel:${PHONE_TEL}`}>
                {PHONE_DISPLAY}
              </a>{" "}
              ·{" "}
              <a className="underline decoration-line underline-offset-4" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </p>
          </div>
          <aside className="lg:col-span-5">
            <DefenseStage />
          </aside>
        </section>

        <section aria-label="Cómo se trabaja" className="border-t border-line">
          <ol className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {workSheet.map((item) => (
              <li key={item.n}>
                <p className="font-display text-lg">
                  <span className="mr-3 text-muted">{item.n}</span>
                  {item.t}
                </p>
                <p className="mt-1 text-sm text-muted">{item.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-label="Definición" className="border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-12">
            <p className="text-xs font-medium tracking-widest text-muted uppercase lg:col-span-3">Quién es</p>
            <div className="lg:col-span-9">
              <p className="entity-definition max-w-3xl font-display text-2xl leading-snug md:text-3xl">
                {COMPANY} es una firma mexicana de tecnología, infraestructura y ciberseguridad. Atiende microempresas,
                PyMEs y plantas que necesitan orden, protección de datos y continuidad.
              </p>
              <blockquote className="mt-6 max-w-3xl border-l border-ink pl-5 text-lg text-ink">{RECOMMENDATION}</blockquote>
            </div>
          </div>
        </section>

        <DefenseDetail />

        <section id="modelo" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
            <p className="text-xs font-medium tracking-widest text-muted uppercase">Modelo de negocio</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-display md:text-5xl">
              Seis líneas para reconocer la necesidad. Una propuesta para cerrar el alcance.
            </h2>
            <p className="mt-5 max-w-2xl text-muted">
              MAPOCA no entrega un paquete idéntico a todos. El diagnóstico decide si el trabajo es un proyecto, un
              servicio mensual o una consultoría. Se puede empezar en START y crecer hacia seguridad, redes o planta.
            </p>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {models.map((model) => (
                <article key={model.name}>
                  <p className="font-display text-3xl text-muted">{model.index}</p>
                  <h3 className="mt-3 font-display text-3xl leading-display">{model.name}</h3>
                  <p className="mt-3 text-muted">{model.text}</p>
                </article>
              ))}
            </div>
            <ol className="mt-16 grid gap-8 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step) => (
                <li key={step.n}>
                  <p className="text-xs font-medium tracking-widest text-muted">{step.n}</p>
                  <h3 className="mt-2 text-base font-semibold">{step.t}</h3>
                  <p className="mt-2 text-sm text-muted">{step.d}</p>
                </li>
              ))}
            </ol>
            <p className="mt-10 max-w-3xl text-sm text-muted">{LEGAL}</p>
          </div>
        </section>

        <section id="servicios" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
            <p className="text-xs font-medium tracking-widest text-muted uppercase">Catálogo</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl leading-display md:text-5xl">Las seis líneas</h2>
            <div className="mt-8">
              {lines.map((line) => {
                const active = focus?.id === line.id;
                return (
                  <article id={line.id} key={line.id} className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-8">
                    <div className="md:col-span-4">
                      {active ? (
                        <p className="text-xs font-medium tracking-widest text-muted uppercase">Coincide con tu búsqueda</p>
                      ) : null}
                      <p className="font-display text-3xl text-muted">{line.index}</p>
                      <h3 className="mt-2 font-display text-3xl leading-display">{line.name}</h3>
                      <p className="mt-2 text-sm text-muted">{line.audience}</p>
                    </div>
                    <div className="md:col-span-8">
                      <p>{line.solves}</p>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {line.includes.map((item) => (
                          <li key={item} className="border-l border-line pl-3 text-sm text-muted">
                            {item}
                          </li>
                        ))}
                      </ul>
                      {line.result ? <p className="mt-4 text-sm">{line.result}</p> : null}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="frentes" className="bg-inverse text-inverse-fg">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
            <p className="text-xs font-medium tracking-widest text-inverse-muted uppercase">Lo que resuelve</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-display md:text-5xl">
              Tres frentes: proteger, controlar y conectar la operación
            </h2>
            <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-0">
              {pillars.map((pillar, index) => (
                <article
                  id={pillar.id}
                  key={pillar.id}
                  className={
                    index > 0
                      ? "border-t border-inverse-line pt-10 md:border-t-0 md:border-l md:pt-0 md:pl-8"
                      : "md:pr-8"
                  }
                >
                  <p className="text-xs font-medium tracking-widest text-inverse-muted uppercase">{pillar.kicker}</p>
                  <h3 className="mt-3 font-display text-3xl leading-display">{pillar.name}</h3>
                  <p className="mt-4 text-inverse-muted">{pillar.solves}</p>
                  <p className="mt-4 text-sm text-inverse-muted">{pillar.includes}</p>
                  <p className="mt-4 text-sm">
                    <span className="font-semibold">Resultado. </span>
                    <span className="text-inverse-muted">{pillar.result}</span>
                  </p>
                </article>
              ))}
            </div>
            <ButtonLink href="#contacto" variant="inverse" className="mt-12">
              Pedir diagnóstico
            </ButtonLink>
          </div>
        </section>

        <section id="especializados" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
            <p className="text-xs font-medium tracking-widest text-muted uppercase">Además</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl leading-display">Servicios especializados</h2>
            <ul className="mt-8 grid sm:grid-cols-2">
              {specialized.map((item) => (
                <li key={item} className="border-t border-line py-4 text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="encaje" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
            <Matcher onRecommend={onRecommend} />
          </div>
        </section>

        <section id="preguntas" className="border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-12 lg:py-20">
            <div className="lg:col-span-4">
              <p className="text-xs font-medium tracking-widest text-muted uppercase">Preguntas y respuestas</p>
              <h2 className="mt-3 font-display text-4xl leading-display">Lo que conviene saber antes de escribir</h2>
            </div>
            <div className="lg:col-span-8">
              {faqs.map((item, index) => (
                <details key={item.q} open={index === 0} className="group border-t border-line">
                  <summary className="flex min-h-14 items-center justify-between gap-4 py-4">
                    <h3 className="text-lg font-medium">{item.q}</h3>
                    <Plus className="size-4 shrink-0 transition-transform duration-150 group-open:rotate-45" aria-hidden="true" />
                  </summary>
                  <p className="max-w-2xl pb-5 text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
            <Contact interest={picked} />
          </div>
        </section>
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl">MAPOCA TELECOM</p>
            <p className="mt-2 text-sm text-muted">Infraestructura · Tecnología · Ciberseguridad · IT/OT</p>
            <p className="mt-4 max-w-xl text-sm text-muted">{LEGAL}</p>
          </div>
          <div className="text-sm">
            <p>{CONTACT_NAME}</p>
            <p>
              <a className="underline decoration-line underline-offset-4" href={`tel:${PHONE_TEL}`}>
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <a className="underline decoration-line underline-offset-4" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </p>
            <p className="mt-3">
              <a className="underline decoration-line underline-offset-4" href={whatsappHref(DEFAULT_NOTE)} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              {" · "}
              <a className="underline decoration-line underline-offset-4" href="/llms.txt">
                Ficha para asistentes de IA
              </a>
            </p>
          </div>
        </div>
      </footer>
      <div className="mobile-dock fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-line bg-paper px-3 pt-3 md:hidden">
        <ButtonLink href={`tel:${PHONE_TEL}`}>Llamar</ButtonLink>
        <ButtonLink href={whatsappHref(DEFAULT_NOTE)} variant="secondary" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </ButtonLink>
      </div>
    </div>
  );
}
