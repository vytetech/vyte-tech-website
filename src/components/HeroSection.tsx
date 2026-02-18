import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import vyteLogo from "@/assets/vyte-logo.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main headline */}
          <h1 className="font-bold text-center leading-[1.2]">
            <span className="block text-5xl md:text-6xl lg:text-7xl text-foreground">
              VyteTech
            </span>

            <span className="sm:text-xl text-2xl md:text-6xl lg:text-7xl gradient-text whitespace-nowrap">
              Tecnologia para Negócios
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Transformamos tecnologia em resultados reais para o seu negócio.
            Soluções inovadoras, sob medida e escaláveis para impulsionar sua
            empresa.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="glow-primary text-lg px-8 py-6 hover:scale-105 transition-transform"
              asChild
            >
              <a href="#contato">
                Solicitar orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
              asChild
            >
              <a href="#servicos">Conheça nossos serviços</a>
            </Button>
          </div>

          {/* Tech stack badges */}
          <div
            className="flex flex-wrap justify-center gap-3 pt-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            {["React", "Node.js", "Cloud", "AI", "DevOps"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-muted/50 border border-border rounded-full text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#sobre"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
