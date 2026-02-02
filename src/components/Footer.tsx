import vyteLogo from "@/assets/vyte-logo.png";
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
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img src={vyteLogo} alt="Vyte Tech" className="h-10 w-auto" />
              <span className="text-xl font-bold text-foreground">
                Vyte<span className="text-primary">Tech</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground italic">
              "Onde código vira solução"
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
              © {currentYear} Vyte Tech. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              CNPJ: XX.XXX.XXX/0001-XX
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
