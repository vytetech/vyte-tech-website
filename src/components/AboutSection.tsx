import { Target, Lightbulb, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Buscamos constantemente as melhores tecnologias e práticas do mercado.',
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Cada solução é projetada para gerar impacto real no seu negócio.',
    },
    {
      icon: Users,
      title: 'Parceria',
      description: 'Trabalhamos lado a lado com nossos clientes em cada etapa do projeto.',
    },
    {
      icon: Zap,
      title: 'Eficiência',
      description: 'Processos ágeis e entregas rápidas sem comprometer a qualidade.',
    },
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Sobre nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Transformando ideias em{' '}
              <span className="gradient-text">soluções digitais</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                A <span className="text-foreground font-semibold">Vyte Tech</span> é uma startup de tecnologia focada em 
                inovação, eficiência e soluções sob medida. Nascemos com a missão de transformar código em 
                soluções que impulsionam negócios.
              </p>
              <p>
                Com uma equipe multidisciplinar e apaixonada por tecnologia, desenvolvemos sistemas modernos, 
                escaláveis e alinhados às necessidades específicas de cada cliente. Do planejamento à 
                implementação, garantimos qualidade e excelência em cada entrega.
              </p>
              <p>
                Acreditamos que a tecnologia deve ser acessível, confiável e, acima de tudo, 
                <span className="text-primary font-semibold"> gerar resultados reais</span>.
              </p>
            </div>
          </div>

          {/* Right side - Values grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-6 bg-card border border-border rounded-xl card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
