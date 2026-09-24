import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const DESCRIPTION =
  "Ciberseguridad para PyMEs e industria en México: empresa hackeada, ransomware, clonación de identidad, phishing, IT/OT y ERP. MAPOCA TELECOM. Martín Porras, 440 184 8426.";

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
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
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
