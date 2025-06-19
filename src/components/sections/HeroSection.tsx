import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative text-primary-foreground py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080.png" 
          alt="Nanchang Ethiopia aluminum works background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          data-ai-hint="ethiopian textile pattern"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-red-700 opacity-95"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-10 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold mb-6 drop-shadow-lg">
          Nanchang Ethiopia
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-medium drop-shadow-md">
          Premier Aluminum Solutions
        </p>
        <p className="text-md sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto drop-shadow">
          Delivering top-quality aluminum windows, doors, curtain walls, and custom fabrications across Ethiopia.
          Innovative designs, durable materials, and expert craftsmanship for your projects.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/80 text-accent-foreground font-semibold px-8 py-3 text-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-out">
            <Link href="#services">Explore Our Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-3 text-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-out">
            <Link href="#contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
