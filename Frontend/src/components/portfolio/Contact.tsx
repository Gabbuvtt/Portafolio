import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center relative rounded-3xl border border-border bg-card/60 backdrop-blur-sm p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 -z-10" />
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/20 blur-3xl -z-10" />

          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Contacto
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4">
            ¿Hablamos de tu próximo <span className="text-gradient">proyecto</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Estoy abierto a colaboraciones, freelance y oportunidades full-time.
            Escríbeme y te respondo lo antes posible.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="glow-primary" asChild>
              <a href="mailto:hola@ejemplo.com">
                <Mail className="mr-2 h-4 w-4" />
                Envíame un email
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#" target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        <footer className="text-center text-sm text-muted-foreground mt-16">
          © {new Date().getFullYear()} · Diseñado y construido con cuidado.
        </footer>
      </div>
    </section>
  );
};

export default Contact;
