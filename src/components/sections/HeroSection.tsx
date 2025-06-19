
"use client";
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { gsap } from 'gsap';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const btnGroupRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    if (headingRef.current) {
      tl.fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
    }
    if (p1Ref.current) {
      tl.fromTo(p1Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.7");
    }
    if (p2Ref.current) {
      tl.fromTo(p2Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");
    }
    if (btnGroupRef.current) {
      tl.fromTo(btnGroupRef.current.children, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.7, stagger: 0.2 }, "-=0.5");
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative text-primary-foreground py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ekookna.co.uk/file/uploads/aktualnosci_2000_corredera.jpg"
          alt="Modern aluminum architectural installation"
          layout="fill"
          objectFit="cover"
          className="opacity-60" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-10 text-center relative z-10">
        <h1 ref={headingRef} className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold mb-6 drop-shadow-lg">
          Nanchang Ethiopia
        </h1>
        <p ref={p1Ref} className="text-xl md:text-2xl mb-4 font-medium drop-shadow-md">
          Premier Aluminum Solutions
        </p>
        <p ref={p2Ref} className="text-md sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto drop-shadow">
          Delivering top-quality aluminum windows, doors, curtain walls, and custom fabrications across Ethiopia.
          Innovative designs, durable materials, and expert craftsmanship for your projects.
        </p>
        <div ref={btnGroupRef} className="flex flex-col sm:flex-row justify-center items-center gap-4">
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
