import vyteLogo from "@/assets/vytetech-logo.svg";
import { Linkedin, Instagram, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/vytetech",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/vytetech",
      label: "Instagram",
    },
    { icon: Github, href: "https://github.com/vytetech", label: "GitHub" },
  ];

  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and slogan */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={vyteLogo}
              alt="VyteTech"
              className="h-16 md:h-24 lg:h-28 w-auto"
            />

            <p className="text-sm text-muted-foreground italic">
              "Tecnologia para Negócios"
            </p>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} VyteTech. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              CNPJ: 64.655.034/0001-05
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
