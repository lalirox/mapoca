import { useState } from "react";
import { OFFICIAL_LOGO } from "./logo";

/**
 * Logo oficial de MAPOCA TELECOM (public/mapoca_corp.png).
 *
 * El PNG vive en el repositorio pero puede faltar temporalmente en algún
 * entorno (por ejemplo, antes de propagarse a esta rama). En ese caso se
 * muestra un emblema SVG con los mismos colores de marca —negro, rojo y
 * blanco— para que el header/footer nunca rompan el layout.
 */
export function OfficialLogo({ className = "size-9" }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <svg viewBox="0 0 32 32" aria-hidden className={className}>
        <rect width="32" height="32" rx="7" fill="#0a0a0a" />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="16"
          fill="#ffffff"
        >
          M
        </text>
        <circle cx="24" cy="24" r="3.5" fill="#c1121f" />
      </svg>
    );
  }

  return (
    <img
      src={OFFICIAL_LOGO}
      alt="MAPOCA TELECOM — logo oficial"
      width={969}
      height={744}
      loading="eager"
      decoding="async"
      onError={() => setFailed(true)}
      className={`${className} shrink-0 object-contain`}
    />
  );
}
