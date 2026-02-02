import { 
  Code2, 
  Globe, 
  MessageSquareCode, 
  Server, 
  Cloud, 
  RefreshCcw,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: 'Desenvolvimento de Software',
      description: 'Criamos softwares sob medida para atender às necessidades específicas do seu negócio, desde sistemas internos até plataformas complexas.',
      features: ['Sistemas personalizados', 'APIs e integrações', 'Aplicações escaláveis'],
    },
    {
      icon: Globe,
      title: 'Sistemas Web e Aplicações',
      description: 'Desenvolvemos aplicações web modernas, responsivas e de alta performance para sua empresa alcançar mais clientes.',
      features: ['Sites institucionais', 'E-commerce', 'Web apps'],
    },
    {
      icon: MessageSquareCode,
      title: 'Consultoria em TI',
      description: 'Oferecemos consultoria estratégica para otimizar seus processos tecnológicos e tomar decisões mais assertivas.',
      features: ['Análise de sistemas', 'Planejamento estratégico', 'Transformação digital'],
    },
    {
      icon: Server,
      title: 'Infraestrutura e Suporte',
      description: 'Garantimos que sua infraestrutura de TI funcione com máxima eficiência, segurança e disponibilidade.',
      features: ['Redes e servidores', 'Suporte técnico', 'Segurança da informação'],
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Migramos e gerenciamos suas aplicações na nuvem, garantindo escalabilidade, economia e alta disponibilidade.',
      features: ['AWS / Azure / GCP', 'Migração para nuvem', 'Arquitetura cloud-native'],
    },
    {
      icon: RefreshCcw,
      title: 'Integrações e Automações',
      description: 'Conectamos seus sistemas e automatizamos processos para aumentar a produtividade e reduzir erros operacionais.',
      features: ['APIs e webhooks', 'RPA', 'Workflows automatizados'],
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-muted/30 relative">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 circuit-lines opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Nossos serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Soluções completas em{' '}
            <span className="gradient-text">tecnologia</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Da concepção à manutenção, oferecemos um portfólio completo de serviços 
            para impulsionar a transformação digital da sua empresa.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-2xl p-8 card-hover relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href="#contato"
                  className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all"
                >
                  Saiba mais
                  <ArrowRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="glow-primary" asChild>
            <a href="#contato">
              Solicite uma proposta personalizada
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
