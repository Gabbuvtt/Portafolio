import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: "Live" | "En desarrollo";
  liveUrl?: string;
  repoUrl?: string;
};

const projects: Project[] = [
  {
    title: "Aplicación 1",
    description:
      "Mi primera aplicación desplegada. Una experiencia web completa enfocada en performance y usabilidad.",
    image: project1,
    tags: ["React", "TypeScript", "Tailwind"],
    status: "Live",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Aplicación 2",
    description:
      "Proyecto en desarrollo local, próximamente desplegado en Netlify. Explorando nuevas ideas y patrones.",
    image: project2,
    tags: ["React", "Node.js", "Netlify"],
    status: "En desarrollo",
    repoUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Proyectos
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Trabajos <span className="text-gradient">destacados</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Una selección de las aplicaciones que he construido.
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
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md bg-background/80 border border-border">
                  <span
                    className={
                      p.status === "Live"
                        ? "text-primary"
                        : "text-accent"
                    }
                  >
                    ● {p.status}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border"
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
