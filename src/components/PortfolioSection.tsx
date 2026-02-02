import { ExternalLink, Code2, Smartphone, Globe, ShoppingCart, BarChart3, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Sistema ERP Empresarial',
    description: 'Plataforma completa de gestão empresarial com módulos de vendas, estoque, financeiro e RH.',
    category: 'Software sob medida',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    icon: BarChart3,
    gradient: 'from-primary/20 to-cyan-500/20',
  },
  {
    id: 2,
    title: 'App de Delivery',
    description: 'Aplicação mobile para restaurantes com pedidos em tempo real, rastreamento e pagamentos.',
    category: 'Aplicativo Mobile',
    technologies: ['React Native', 'Firebase', 'Stripe'],
    icon: Smartphone,
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
  {
    id: 3,
    title: 'E-commerce B2B',
    description: 'Plataforma de vendas B2B com catálogo inteligente, integrações ERP e checkout personalizado.',
    category: 'Sistema Web',
    technologies: ['Next.js', 'Supabase', 'AWS'],
    icon: ShoppingCart,
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 4,
    title: 'Dashboard Analytics',
    description: 'Painel de Business Intelligence com visualização de dados em tempo real e relatórios automatizados.',
    category: 'Data Analytics',
    technologies: ['Python', 'React', 'D3.js'],
    icon: Cpu,
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    id: 5,
    title: 'Portal Institucional',
    description: 'Website corporativo moderno com CMS integrado, blog e área do cliente.',
    category: 'Web Design',
    technologies: ['React', 'Tailwind', 'Sanity'],
    icon: Globe,
    gradient: 'from-pink-500/20 to-rose-500/20',
  },
  {
    id: 6,
    title: 'Automação Industrial',
    description: 'Sistema de monitoramento IoT para indústria com alertas inteligentes e manutenção preditiva.',
    category: 'IoT & Automação',
    technologies: ['Python', 'MQTT', 'InfluxDB'],
    icon: Code2,
    gradient: 'from-violet-500/20 to-indigo-500/20',
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Projetos que <span className="gradient-text">transformam negócios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes, 
            sempre focados em entregar valor real através da tecnologia.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="group relative bg-card/50 border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  {/* Tech pattern overlay */}
                  <div className="absolute inset-0 tech-grid opacity-50" />
                  
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-background/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-border group-hover:scale-110 transition-transform duration-500">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/80 backdrop-blur-sm text-xs font-medium text-primary rounded-full border border-primary/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary/50 text-xs text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Button 
                    variant="ghost" 
                    className="w-full justify-center gap-2 group-hover:text-primary group-hover:bg-primary/10 transition-colors"
                  >
                    Ver detalhes
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute -inset-px bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Quer ver seu projeto aqui? Vamos conversar!
          </p>
          <Button 
            size="lg" 
            className="glow-primary"
            asChild
          >
            <a href="#contato">
              Solicitar orçamento
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
