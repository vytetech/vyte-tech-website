import {
  Sparkles,
  TrendingUp,
  Layers,
  HeadphonesIcon,
  CheckCircle2,
} from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Sparkles,
      title: "Soluções Personalizadas",
      description:
        "Cada projeto é único. Desenvolvemos soluções totalmente adaptadas à realidade e objetivos do seu negócio.",
      highlight: "100%",
      highlightLabel: "customizado",
    },
    {
      icon: TrendingUp,
      title: "Foco em Resultado e Performance",
      description:
        "Não entregamos apenas código, entregamos resultados. Cada solução é pensada para gerar impacto mensurável.",
      highlight: "ROI",
      highlightLabel: "mensurável",
    },
    {
      icon: Layers,
      title: "Tecnologia Moderna e Escalável",
      description:
        "Utilizamos as tecnologias mais modernas do mercado, garantindo que sua solução cresça junto com seu negócio.",
      highlight: "Stack",
      highlightLabel: "atualizada",
    },
    {
      icon: HeadphonesIcon,
      title: "Atendimento Consultivo",
      description:
        "Atuamos como parceiros estratégicos, não apenas fornecedores. Entendemos seu negócio para entregar o melhor.",
      highlight: "360°",
      highlightLabel: "suporte",
    },
  ];

  return (
    <section id="diferenciais" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Por que a VyteTech?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Nossos <span className="gradient-text">diferenciais</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            O que nos torna a escolha certa para transformar sua visão em
            realidade digital.
          </p>
        </div>

        {/* Differentials grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-card border border-border rounded-2xl p-8 overflow-hidden card-hover"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />

              <div className="relative z-10 flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>

                  {/* Highlight badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                    <span className="text-2xl font-bold text-primary">
                      {item.highlight}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.highlightLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 p-8 bg-card border border-border rounded-2xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Projetos entregues" },
              { value: "98%", label: "Satisfação dos clientes" },
              { value: "24/7", label: "Suporte disponível" },
              { value: "5+", label: "Anos de experiência" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
