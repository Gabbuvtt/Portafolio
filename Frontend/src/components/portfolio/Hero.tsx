import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1088}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/75 to-background" />
        <div className="absolute inset-0 bg-grid opacity-25" />
      </div>

      {/* Floating glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-primary/25 blur-3xl animate-pulse-glow -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent/15 blur-3xl animate-pulse-glow -z-10" />

      <div className="container mx-auto px-6 text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm text-muted-foreground mb-8 animate-fade-up font-mono">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Disponible para nuevos proyectos
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 max-w-5xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Diseñando <span className="text-gradient">arquitecturas escalables</span> con código y datos.
        </h1>

        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Soy <strong className="text-foreground font-semibold">Gabriel Mejia</strong> — Arquitecto de Software, Desarrollador
          Fullstack y Analista de Datos/IA. Co-fundador de{" "}
          <span className="text-primary font-medium">BiCloud&nbsp;M</span> y{" "}
          <span className="text-accent font-medium">Bolix</span>.
        </p>

        <div
          className="flex flex-wrap justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button size="lg" className="glow-primary group" asChild>
            <a href="#projects">
              Ver proyectos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/Gabbuvtt" target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>

        {/* Tech ticker */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-muted-foreground/70 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <span>React</span>
          <span className="opacity-40">/</span>
          <span>TypeScript</span>
          <span className="opacity-40">/</span>
          <span>Python</span>
          <span className="opacity-40">/</span>
          <span>FastAPI</span>
          <span className="opacity-40">/</span>
          <span>PostgreSQL</span>
          <span className="opacity-40">/</span>
          <span>C++</span>
          <span className="opacity-40">/</span>
          <span>NumPy</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
