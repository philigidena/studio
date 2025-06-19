
"use client";
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { gsap } from 'gsap';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const btnGroupRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const openSashRef = useRef<SVGGElement>(null);


  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    if (svgRef.current) {
      tl.fromTo(svgRef.current, 
        { opacity: 0, scale: 0.8, y: 20 }, 
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power3.out' }, 
        0.2
      );
    }

    if (openSashRef.current) {
      // Initial state before animation (matches the SVG's transform attribute)
      // transform="translate(-115, 0) rotate(-25 110 125) scale(0.95)"
      // We want to animate it to this resting position from a slightly more "closed" or "further back" state
      gsap.set(openSashRef.current, { 
        transformOrigin: "110px 125px", // Center of rotation based on SVG
        rotation: -45, // Start more "closed"
        scale: 0.9,
        x: -130, // Start further translated
        opacity: 0,
      });
      tl.to(openSashRef.current, 
        { 
          rotation: -25, // Target rotation from SVG
          scale: 0.95,    // Target scale from SVG
          x: -115,        // Target translate from SVG
          opacity: 1,
          duration: 1.2, 
          ease: 'elastic.out(1, 0.6)' 
        }, 
        0.5 // Starts shortly after the main SVG container animation
      );
    }

    if (headingRef.current) {
      tl.fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 0.4);
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
    <section ref={sectionRef} className="bg-slate-800 text-primary-foreground py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="w-full max-w-md mx-auto md:mx-0 md:order-1">
            <svg 
              ref={svgRef}
              viewBox="0 0 250 250" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-labelledby="heroWindowTitle" 
              className="w-full h-auto drop-shadow-2xl"
            >
              <title id="heroWindowTitle">Stylized open window illustration</title>
              <defs>
                <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: "hsl(0 0% 100% / 0.1)", stopOpacity: 0.1}} />
                  <stop offset="100%" style={{stopColor: "hsl(0 0% 100% / 0.05)", stopOpacity: 0.05}} />
                </linearGradient>
                 <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                  <feOffset dx="2" dy="3" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.5"/>
                  </feComponentTransfer>
                  <feMerge> 
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/> 
                  </feMerge>
                </filter>
              </defs>
              
              <g id="window-assembly" style={{ filter: "url(#dropShadow)" }}>
                {/* Fixed part of the window frame (right side, representing the opening) */}
                <g id="fixed-frame">
                  <rect x="110" y="20" width="120" height="210" fill="hsl(var(--card) / 0.05)" stroke="hsl(var(--border))" strokeWidth="4" rx="5" />
                  {/* Subtle hint of background through fixed opening */}
                  <rect x="115" y="25" width="110" height="200" fill="hsl(var(--background)/0.05)" rx="3" />
                </g>

                {/* Central Mullion / Hinge Line */}
                <line x1="110" y1="20" x2="110" y2="230" stroke="hsl(var(--card-foreground)/0.8)" strokeWidth="6" />

                {/* Open Sash (left side, opens outwards) */}
                <g ref={openSashRef} id="open-sash" transform="translate(-115, 0) rotate(-25 110 125) scale(0.95)">
                  {/* Sash Frame */}
                  <rect x="0" y="15" width="110" height="220" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="5" rx="6" />
                  {/* Glass Pane */}
                  <rect x="10" y="25" width="90" height="200" fill="url(#glassGradient)" stroke="hsl(var(--border)/0.5)" strokeWidth="1.5" rx="3" />
                   {/* Handle on the sash */}
                  <rect x="90" y="115" width="8" height="25" fill="hsl(var(--muted-foreground)/0.8)" rx="2" ry="2" />
                  <circle cx="94" cy="120" r="3" fill="hsl(var(--muted-foreground)/0.6)" />
                </g>
              </g>
            </svg>
          </div>

          <div className="text-center md:text-left md:order-2">
            <h1 ref={headingRef} className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold mb-4">
              Nanchang Ethiopia
            </h1>
            <p ref={p1Ref} className="text-xl md:text-2xl mb-3 font-semibold text-primary-foreground/90">
              Premier Aluminum Solutions
            </p>
            <p ref={p2Ref} className="text-md sm:text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0 text-primary-foreground/80">
              Delivering top-quality aluminum windows, doors, curtain walls, and custom fabrications across Ethiopia.
              Innovative designs, durable materials, and expert craftsmanship for your projects.
            </p>
            <div ref={btnGroupRef} className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 text-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-out">
                <Link href="#services">Explore Our Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-slate-800 font-semibold px-8 py-3 text-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-out">
                <Link href="#contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
