import { createFileRoute } from "@tanstack/react-router";
import { heroFor, schemaJson } from "@/content/mapoca";
import { HomePage } from "@/components/mapoca/home-page";

const DESCRIPTION =
  "Ciberseguridad para PyMEs e industria en México: empresa hackeada, ransomware, clonación de identidad, phishing, IT/OT y ERP. MAPOCA TELECOM. Martín Porras, 440 184 8426.";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) => {
    const value = search.servicio;
    if (typeof value !== "string") return {} as { servicio?: string };
    const servicio = value.trim().toLowerCase().slice(0, 48);
    if (!/^[a-z0-9-]+$/.test(servicio)) return {};
    return { servicio };
  },
  head: ({ match }) => {
    const hero = heroFor(match.search.servicio);
    const titled = match.search.servicio ? `${hero.title} | MAPOCA TELECOM` : undefined;
    return {
      meta: [
        ...(titled ? [{ title: titled }] : []),
        { name: "description", content: match.search.servicio ? hero.lede : DESCRIPTION },
      ],
      scripts: [{ type: "application/ld+json", children: schemaJson() }],
    };
  },
  component: Home,
});

function Home() {
  const { servicio } = Route.useSearch();
  return <HomePage servicio={servicio} />;
}
