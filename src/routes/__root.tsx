import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const DESCRIPTION =
  "Ciberseguridad para PyMEs e industria en México: empresa hackeada, ransomware, clonación de identidad, phishing, IT/OT y ERP. MAPOCA TELECOM. Martín Porras, 440 184 8426.";

// Logo oficial subido a /public/mapoca_corp.png. Se usa como favicon de la
// pestaña, apple-touch-icon y logo del sitio. Si el archivo todavía no está
// desplegado, caemos a un favicon SVG en línea (negro + punto rojo) para que
// la pestaña nunca quede rota.
export const OFFICIAL_LOGO = "/mapoca_corp.png";
const LOGO_FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%230a0a0a'/%3E%3Ccircle cx='16' cy='16' r='5' fill='%23c1121f'/%3E%3C/svg%3E";

let LOGO_HREF = LOGO_FALLBACK;
try {
  // Resuelve en tiempo de build/dev si el PNG existe en /public.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { existsSync } = require("node:fs") as typeof import("node:fs");
  if (existsSync(new URL(`../public/mapoca_corp.png`, import.meta.url))) {
    LOGO_HREF = OFFICIAL_LOGO;
  }
} catch {
  /* entorno sin fs: mantener fallback */
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MAPOCA TELECOM | Ciberseguridad, infraestructura y TI en México" },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "ciberseguridad PyMEs México, empresa hackeada, ransomware, secuestro de información, clonación de identidad, suplantación, phishing, fraude electrónico, ciberseguridad industrial, segmentación IT/OT, SAP Business One, vCISO, MAPOCA TELECOM, Martín Porras",
      },
      { name: "author", content: "MAPOCA TELECOM" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "geo.region", content: "MX" },
      { name: "geo.placename", content: "México" },
      { name: "language", content: "Spanish" },
      { name: "format-detection", content: "telephone=yes" },
    ],
    links: [
      // Logo oficial (public/mapoca_corp.png) como favicon de la pestaña.
      // Si el archivo aún no está, se usa un fallback en línea para nunca romper la pestaña.
      { rel: "icon", type: "image/png", href: LOGO_HREF },
      { rel: "shortcut icon", type: "image/png", href: LOGO_HREF },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: LOGO_HREF },
      {
        rel: "alternate",
        type: "text/plain",
        href: "/llms.txt",
        title: "Información para modelos de lenguaje",
      },
      { rel: "author", href: "mailto:mapoca.telecom@gmail.com" },
    ],
  }),
  component: () => (
    <html lang="es-MX" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
