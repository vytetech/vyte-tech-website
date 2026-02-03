import { FileCode, Shield, CheckCircle2 } from "lucide-react";

const CnaeSection = () => {
  const cnaes = [
    {
      code: "6201-5/01",
      title: "Desenvolvimento de programas de computador sob encomenda",
    },
    {
      code: "6201-5/02",
      title: "Web design",
    },
    {
      code: "6202-3/00",
      title:
        "Desenvolvimento e licenciamento de programas de computador customizáveis",
    },
    {
      code: "6203-1/00",
      title:
        "Desenvolvimento e licenciamento de programas de computador não customizáveis",
    },
    {
      code: "6209-1/00",
      title:
        "Suporte técnico, manutenção e outros serviços em tecnologia da informação",
    },
    {
      code: "6204-0/00",
      title: "Consultoria em tecnologia da informação",
    },
  ];

  return (
    <section className="py-24 bg-muted/20 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left side - Info */}
          <div className="lg:w-1/3 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Atuação Legal
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Áreas de <span className="gradient-text">Atuação</span>
            </h2>

            <p className="text-muted-foreground">
              A VyteTech atua de forma regulamentada nas principais atividades
              de tecnologia da informação, conforme classificação nacional de
              atividades econômicas (CNAE).
            </p>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <FileCode className="h-5 w-5 text-primary" />
              <span>Empresa regularizada e em conformidade</span>
            </div>
          </div>

          {/* Right side - CNAE list */}
          <div className="lg:w-2/3">
            <div className="grid sm:grid-cols-2 gap-4">
              {cnaes.map((cnae, index) => (
                <div
                  key={cnae.code}
                  className="group flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-primary mb-1">
                      {cnae.code}
                    </span>
                    <span className="text-sm text-foreground">
                      {cnae.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CnaeSection;
