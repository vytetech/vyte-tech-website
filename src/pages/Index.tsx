import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import CnaeSection from '@/components/CnaeSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DifferentialsSection />
        <CnaeSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
