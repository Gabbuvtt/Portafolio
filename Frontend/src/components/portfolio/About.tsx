import { Code2, Database, Server, Smartphone } from "lucide-react";

const stackGroups = [
  {
    label: "Frontend",
    icon: Code2,
    items: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    label: "Backend",
    icon: Server,
    items: ["Python", "FastAPI", "Flask", "C++"],
  },
  {
    label: "Datos & IA",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "NumPy", "Estadística"],
  },
  {
    label: "Móvil",
    icon: Smartphone,
    items: ["React Native"],
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <div>
            <span className="text-sm uppercase tracking-widest text-primary font-mono font-medium">
              // Sobre mí
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Construyendo software con <span className="text-gradient">criterio técnico</span>.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Estudiante de <strong className="text-foreground">Ingeniería de Computación en la UCAB</strong>,
              con foco en arquitecturas escalables, sistemas distribuidos y modelado de datos.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Co-fundé <strong className="text-primary">BiCloud M</strong> — una plataforma SaaS y de
              infraestructura — y <strong className="text-accent">Bolix</strong>, dedicada a
              analítica de datos y motores de predicción estadística.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Mi enfoque está en diseñar sistemas que crezcan bien: APIs limpias,
              modelos de datos sólidos y código mantenible que sostenga el producto a largo plazo.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="rounded-xl border border-border bg-card/40 p-4">
                <div className="text-3xl font-bold text-gradient">2</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono">startups co-fundadas</div>
              </div>
              <div className="rounded-xl border border-border bg-card/40 p-4">
                <div className="text-3xl font-bold text-gradient">Full</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono">stack end-to-end</div>
              </div>
              <div className="rounded-xl border border-border bg-card/40 p-4">
                <div className="text-3xl font-bold text-gradient">UCAB</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono">ing. de computación</div>
              </div>
            </div>
          </div>

          <div id="stack" className="relative scroll-mt-24">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/15 blur-3xl -z-10" />
            <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm uppercase tracking-widest text-muted-foreground font-mono">
                  Stack técnico
                </h3>
                <span className="text-xs font-mono text-accent">~/skills</span>
              </div>

              <div className="space-y-5">
                {stackGroups.map(({ label, icon: Icon, items }) => (
                  <div key={label}>
                    <div className="flex items-center gap-2 mb-2.5">
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold tracking-wide">{label}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-6">
                      {items.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 rounded-md bg-secondary border border-border text-xs font-mono hover:border-primary/60 hover:text-primary transition-colors"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
