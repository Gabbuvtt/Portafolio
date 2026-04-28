const skills = [
  "React", "TypeScript", "Node.js", "Tailwind CSS",
  "Vite", "Git", "REST APIs", "Netlify",
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div>
            <span className="text-sm uppercase tracking-widest text-primary font-medium">
              Sobre mí
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Diseñando y desarrollando con <span className="text-gradient">propósito</span>.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Soy un desarrollador web enfocado en crear interfaces limpias,
              accesibles y rápidas. Disfruto cada parte del proceso: desde la
              idea inicial hasta el deploy en producción.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Actualmente tengo dos aplicaciones en marcha — una ya desplegada y
              otra en desarrollo local que pronto verá la luz en Netlify.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl -z-10" />
            <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-8">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
                Stack & Herramientas
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-gradient">2+</div>
                  <div className="text-sm text-muted-foreground mt-1">Apps en producción/dev</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">∞</div>
                  <div className="text-sm text-muted-foreground mt-1">Café & curiosidad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
