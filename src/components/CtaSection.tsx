import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA content */}
          <div className="mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Pronto para começar?
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Transforme sua ideia em{' '}
              <span className="gradient-text">realidade digital</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Na Vyte Tech, <span className="text-primary font-semibold">código vira solução</span>. 
              Entre em contato e descubra como podemos impulsionar o seu negócio com tecnologia de ponta.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="glow-primary text-lg px-10 py-7 hover:scale-105 transition-transform animate-pulse-glow"
              asChild
            >
              <a href="mailto:contato@vytetech.com.br">
                Solicitar orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-7 border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                Falar pelo WhatsApp
              </a>
            </Button>
          </div>

          {/* Contact info */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 bg-card/50 border border-border rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">E-mail</span>
              <a href="mailto:contato@vytetech.com.br" className="text-foreground hover:text-primary transition-colors font-medium">
                contato@vytetech.com.br
              </a>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-card/50 border border-border rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">WhatsApp</span>
              <a href="https://wa.me/5511999999999" className="text-foreground hover:text-primary transition-colors font-medium">
                (11) 99999-9999
              </a>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-card/50 border border-border rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Localização</span>
              <span className="text-foreground font-medium">
                São Paulo, Brasil
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
