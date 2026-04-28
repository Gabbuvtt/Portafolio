import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground font-bold text-sm group-hover:scale-105 transition-transform">
            GM
          </div>
          <div className="leading-tight">
            <div className="font-bold text-base tracking-tight">Gabriel Mejia</div>
            <div className="text-[11px] text-muted-foreground font-mono">arquitecto de software</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">Sobre mí</a>
          <a href="#stack" className="hover:text-foreground transition-colors">Stack</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Proyectos</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contacto</a>
        </div>
        <Button variant="default" size="sm" asChild>
          <a href="#contact">Contáctame</a>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
