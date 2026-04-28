import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import bicloudImg from "@assets/image_1777346939960.png";
import bolixImg from "@assets/photo_2026-04-27_23-31-39_1777347128192.jpg";

type Project = {
  title: string;
  role: string;
  description: string;
  image: string;
  imageFit?: "cover" | "contain";
  tags: string[];
  status: "Live" | "En desarrollo";
  liveUrl?: string;
  accent: "primary" | "accent";
};

const projects: Project[] = [
  {
    title: "BiCloud M",
    role: "Co-fundador · Arquitecto de Software",
    description:
      "Como Arquitecto de Software diseñé la plataforma SaaS e infraestructura cloud de BiCloud M. Definí la arquitectura modular, las APIs REST, el modelo de datos y el panel administrativo para gestionar tickets, usuarios y operaciones a escala.",
    image: bicloudImg,
    imageFit: "cover",
    tags: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Cloud"],
    status: "Live",
    liveUrl: "https://iaim-beta-proyect.vercel.app/",
    accent: "primary",
  },
  {
    title: "Bolix",
    role: "Co-fundador · Analista de Datos / IA",
    description:
      "Como Analista de Datos / IA construí en Bolix un motor de predicción estadística y analítica financiera: ingesta de fuentes (BCV, Binance), cálculo de tasas promedio en tiempo real y app móvil para consultar indicadores y brechas del mercado.",
    image: bolixImg,
    imageFit: "contain",
    tags: ["Python", "NumPy", "FastAPI", "MySQL", "React Native", "Estadística"],
    status: "Live",
    liveUrl: "https://bolix.app",
    accent: "accent",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 relative scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-widest text-primary font-mono font-medium">
            // Proyectos
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Productos que <span className="text-gradient">co-fundé</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Iniciativas reales en las que diseño la arquitectura y construyo el stack de punta a punta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 animate-fade-up flex flex-col"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden bg-muted relative">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className={`w-full h-full ${p.imageFit === "contain" ? "object-contain p-4" : "object-cover"} group-hover:scale-105 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent pointer-events-none" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono backdrop-blur-md bg-background/80 border border-border">
                  <span className="text-accent">● {p.status}</span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-1">{p.title}</h3>
                <p className={`text-xs font-mono mb-4 ${p.accent === "primary" ? "text-primary" : "text-accent"}`}>
                  {p.role}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-secondary text-secondary-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.liveUrl && (
                  <div className="flex gap-3">
                    <Button size="sm" asChild>
                      <a href={p.liveUrl} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-3.5 w-3.5" />
                        Ver proyecto
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
