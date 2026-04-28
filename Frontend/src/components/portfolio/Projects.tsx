import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

type Project = {
  title: string;
  role: string;
  description: string;
  image: string;
  tags: string[];
  status: "Live" | "En desarrollo";
  liveUrl?: string;
  repoUrl?: string;
  accent: "primary" | "accent";
};

const projects: Project[] = [
  {
    title: "BiCloud M",
    role: "Co-fundador · Arquitecto de Software",
    description:
      "Plataforma SaaS e infraestructura cloud diseñada para escalar workloads de negocio. Arquitectura modular con APIs REST, control de acceso y aprovisionamiento automatizado de servicios.",
    image: project1,
    tags: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Cloud"],
    status: "Live",
    accent: "primary",
  },
  {
    title: "Bolix",
    role: "Co-fundador · Analista de Datos / IA",
    description:
      "Motor de analítica de datos y predicción estadística. Pipelines de procesamiento, modelos predictivos basados en NumPy y APIs para servir resultados en tiempo real a aplicaciones cliente.",
    image: project2,
    tags: ["Python", "NumPy", "FastAPI", "MySQL", "Estadística", "ML"],
    status: "En desarrollo",
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
              className="group relative rounded-2xl overflow-hidden border border-border bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden bg-muted relative">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono backdrop-blur-md bg-background/80 border border-border">
                  <span
                    className={
                      p.status === "Live"
                        ? "text-accent"
                        : "text-primary"
                    }
                  >
                    ● {p.status}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="text-2xl font-bold">{p.title}</h3>
                </div>
                <p className={`text-xs font-mono mb-4 ${p.accent === "primary" ? "text-primary" : "text-accent"}`}>
                  {p.role}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
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
                <div className="flex gap-3">
                  {p.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={p.liveUrl} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-3.5 w-3.5" />
                        Ver demo
                      </a>
                    </Button>
                  )}
                  {p.repoUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={p.repoUrl} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-3.5 w-3.5" />
                        Código
                      </a>
                    </Button>
                  )}
                  {!p.liveUrl && !p.repoUrl && (
                    <span className="text-xs font-mono text-muted-foreground italic">
                      Repositorio privado
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
