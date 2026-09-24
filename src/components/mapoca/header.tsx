import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { OfficialLogo } from "./official-logo";
import { PHONE_DISPLAY, PHONE_TEL } from "@/content/mapoca";
import { ButtonLink } from "@/components/ui/button-link";

const links = [
  { href: "#incidentes", label: "Incidentes" },
  { href: "#defensa", label: "Defensa" },
  { href: "#ia", label: "Riesgos IA" },
  { href: "#servicios", label: "Servicios" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Saltar al contenido
      </a>
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#inicio" className="flex items-center" aria-label="MAPOCA TELECOM — inicio">
          <OfficialLogo className="h-14 w-auto md:h-16" />
        </a>
        <nav aria-label="Secciones" className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink
            href={`tel:${PHONE_TEL}`}
            className="hidden md:inline-flex"
            aria-label={`Llamar al ${PHONE_DISPLAY}`}
          >
            <Phone className="size-4" aria-hidden="true" />
            {PHONE_DISPLAY}
          </ButtonLink>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex size-11 items-center justify-center rounded-full border border-line md:hidden"
            aria-label={`Llamar al ${PHONE_DISPLAY}`}
          >
            <Phone className="size-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line md:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
            {open ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="menu-movil"
          aria-label="Secciones"
          className="border-t border-line px-5 py-3 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex min-h-11 items-center text-base font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
