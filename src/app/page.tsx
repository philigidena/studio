import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServiceShowcase from '@/components/sections/ServiceShowcase';
import ProjectPortfolio from '@/components/sections/ProjectPortfolio';
import AiRecommendationSection from '@/components/sections/AiRecommendationSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServiceShowcase />
        <ProjectPortfolio />
        <AiRecommendationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
