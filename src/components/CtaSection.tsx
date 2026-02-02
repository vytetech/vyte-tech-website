import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Desenvolvimento de Software",
  "Sistemas Web e Aplicações",
  "Consultoria em TI",
  "Infraestrutura e Redes",
  "Cloud Computing",
  "Integrações e Automações",
  "Outro",
];

const CtaSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Build mailto link with form data
    const subject = encodeURIComponent(
      `[Vyte Tech] Contato Cliente - ${formData.service}`
    );
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nServiço: ${formData.service}\n\nMensagem:\n${formData.message}`
    );

    window.location.href = `mailto:vytetech.solutions@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Redirecionando para seu cliente de e-mail!",
      description: "Complete o envio pelo seu aplicativo de e-mail.",
    });

    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Pronto para começar?
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Transforme sua ideia em{" "}
              <span className="gradient-text">realidade digital</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Na Vyte Tech,{" "}
              <span className="text-primary font-semibold">
                código vira solução
              </span>
              . Entre em contato e descubra como podemos impulsionar o seu
              negócio com tecnologia de ponta.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-card/50 border border-border rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Envie sua mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Serviço de interesse *</Label>
                    <Select
                      value={formData.service}
                      onValueChange={handleServiceChange}
                      required
                    >
                      <SelectTrigger className="bg-background/50 border-border focus:border-primary">
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte-nos sobre seu projeto ou necessidade..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full glow-primary text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensagem
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info & Quick Actions */}
            <div className="space-y-8">
              {/* Quick action buttons */}
              <div className="bg-card/50 border border-border rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Ou se preferir...
                </h3>
                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full justify-start glow-primary text-lg py-6"
                    asChild
                  >
                    <a href="mailto:vytetech.solutions@gmail.com">
                      <Mail className="mr-3 h-5 w-5" />
                      Enviar e-mail direto
                      <ArrowRight className="ml-auto h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-start text-lg py-6 border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href="https://wa.me/5511983963362"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="mr-3 h-5 w-5" />
                      Falar pelo WhatsApp
                      <ArrowRight className="ml-auto h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact info cards */}
              <div className="grid gap-4">
                <div className="flex items-center gap-4 p-6 bg-card/50 border border-border rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">
                      E-mail
                    </span>
                    <a
                      href="mailto:vytetech.solutions@gmail.com"
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      vytetech.solutions@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-card/50 border border-border rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">
                      WhatsApp
                    </span>
                    <a
                      href="https://wa.me/5511983963362"
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      (11) 98396-3362
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-card/50 border border-border rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">
                      Localização
                    </span>
                    <span className="text-foreground font-medium">
                      São Paulo, Brasil
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
