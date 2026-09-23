import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import {
  CONTACT_NAME,
  DEFAULT_NOTE,
  EMAIL,
  INCIDENT_INTEREST,
  PHONE_DISPLAY,
  PHONE_TEL,
  lines,
  mailHref,
  whatsappHref,
} from "@/content/mapoca";
import { ButtonLink } from "@/components/ui/button-link";

const options = ["Diagnóstico, aún sin línea definida", INCIDENT_INTEREST, ...lines.map((line) => line.name)];

export function Contact({ interest }: { interest?: string }) {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [interes, setInteres] = useState(interest && options.includes(interest) ? interest : options[0]);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (interest && options.includes(interest)) setInteres(interest);
  }, [interest]);

  function payload() {
    return [
      `Hola, soy ${nombre.trim()}${empresa.trim() ? ` de ${empresa.trim()}` : ""}.`,
      `Me interesa: ${interes}.`,
      mensaje.trim(),
    ].join("\n");
  }

  function ready() {
    if (!nombre.trim() || !mensaje.trim()) {
      setError("Escribe tu nombre y un mensaje breve.");
      return false;
    }
    setError("");
    return true;
  }

  return (
    <div className="grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="text-xs font-medium tracking-widest text-muted uppercase">Contacto</p>
        <h2 className="mt-3 font-display text-4xl leading-display md:text-5xl">Habla con {CONTACT_NAME}</h2>
        <p className="mt-4 max-w-md text-muted">
          Cuéntale el tamaño de la operación y lo que hoy duele. La respuesta es un diagnóstico, no un precio genérico.
        </p>
        <address className="mt-8 not-italic">
          <p className="text-sm font-medium text-muted">Contacto comercial</p>
          <p className="mt-2 font-display text-3xl leading-display">{CONTACT_NAME}</p>
          <a href={`tel:${PHONE_TEL}`} className="mt-4 block font-display text-4xl leading-display tracking-tight md:text-5xl">
            {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="mt-3 block break-all text-base underline decoration-line underline-offset-4">
            {EMAIL}
          </a>
        </address>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={`tel:${PHONE_TEL}`}>
            <Phone className="size-4" aria-hidden="true" />
            Llamar
          </ButtonLink>
          <ButtonLink href={whatsappHref(DEFAULT_NOTE)} variant="secondary" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </ButtonLink>
          <ButtonLink href={`mailto:${EMAIL}`} variant="secondary">
            <Mail className="size-4" aria-hidden="true" />
            Correo
          </ButtonLink>
        </div>
      </div>
      <form
        className="rounded-3xl border border-line bg-panel p-6 lg:col-span-7 lg:p-8"
        onSubmit={(event) => {
          event.preventDefault();
          if (!ready()) return;
          window.location.href = mailHref("Diagnóstico MAPOCA TELECOM", payload());
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium">
            Nombre
            <input
              name="nombre"
              autoComplete="name"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              className="mt-2 h-11 w-full rounded-lg border border-line bg-paper px-3 font-normal text-ink outline-none focus-visible:ring-2 focus-visible:ring-steel"
            />
          </label>
          <label className="block text-sm font-medium">
            Empresa
            <input
              name="empresa"
              autoComplete="organization"
              value={empresa}
              onChange={(event) => setEmpresa(event.target.value)}
              className="mt-2 h-11 w-full rounded-lg border border-line bg-paper px-3 font-normal text-ink outline-none focus-visible:ring-2 focus-visible:ring-steel"
            />
          </label>
        </div>
        <label className="mt-4 block text-sm font-medium">
          Qué necesitas
          <select
            name="interes"
            value={interes}
            onChange={(event) => setInteres(event.target.value)}
            className="mt-2 h-11 w-full rounded-lg border border-line bg-paper px-3 font-normal text-ink outline-none focus-visible:ring-2 focus-visible:ring-steel"
          >
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="mt-4 block text-sm font-medium">
          Mensaje
          <textarea
            name="mensaje"
            value={mensaje}
            onChange={(event) => setMensaje(event.target.value)}
            rows={5}
            className="mt-2 min-h-32 w-full rounded-lg border border-line bg-paper px-3 py-3 font-normal text-ink outline-none focus-visible:ring-2 focus-visible:ring-steel"
          />
        </label>
        {error ? (
          <p role="alert" className="mt-3 text-sm font-medium text-ink">
            {error}
          </p>
        ) : null}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-paper transition-transform duration-150 ease-out active:scale-[0.96]"
          >
            Enviar por correo
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-panel px-5 text-sm font-semibold transition-transform duration-150 ease-out active:scale-[0.96]"
            onClick={() => {
              if (!ready()) return;
              window.open(whatsappHref(payload()), "_blank", "noopener,noreferrer");
            }}
          >
            Enviar por WhatsApp
          </button>
        </div>
        <p className="mt-4 text-sm text-muted">
          El mensaje se abre en tu correo o WhatsApp. Esta página no lo guarda. Si no se abre, escribe a {EMAIL}.
        </p>
      </form>
    </div>
  );
}
