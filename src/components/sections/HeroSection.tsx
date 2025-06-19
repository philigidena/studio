
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
  const openPaneGroupRef = useRef<SVGGElement>(null); // Changed ref name and type


  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    if (svgRef.current) {
      tl.fromTo(svgRef.current, 
        { opacity: 0, scale: 0.8, y: 20 }, 
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 
        0.2
      );
    }

    if (openPaneGroupRef.current) {
      gsap.set(openPaneGroupRef.current, { 
        rotationY: -75, // Start more "closed" or angled away
        svgOrigin: "40px 125px", // GSAP specific transform origin for SVG (hinge point)
        opacity: 0,
        scale: 0.9
      });
      tl.to(openPaneGroupRef.current, 
        { 
          rotationY: 5, // Target rotation: slightly ajar
          opacity: 1,
          scale: 1,
          duration: 1.2, 
          ease: 'power3.out' 
        }, 
        0.4 // Starts shortly after the main SVG container animation
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
              className="w-full h-auto drop-shadow-xl" // Kept drop-shadow for depth
            >
              <title id="heroWindowTitle">Modern stylized window illustration</title>
              <defs>
                <linearGradient id="glassReflectionHero" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: "hsl(var(--primary-foreground) / 0.1)"}} />
                  <stop offset="100%" style={{stopColor: "hsl(var(--primary-foreground) / 0.02)"}} />
                </linearGradient>
                 <filter id="subtleShadowHero" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                  <feOffset dx="1" dy="2" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3"/>
                  </feComponentTransfer>
                  <feMerge> 
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/> 
                  </feMerge>
                </filter>
              </defs>
              
              <g filter="url(#subtleShadowHero)">
                {/* Outer Frame */}
                <rect x="20" y="20" width="210" height="210" rx="8" fill="hsl(var(--muted-foreground)/0.3)" stroke="hsl(var(--muted-foreground)/0.5)" strokeWidth="4" />
                
                {/* Inner "Glass Area" - represents the overall opening */}
                <rect x="35" y="35" width="180" height="180" rx="4" fill="url(#glassReflectionHero)" />

                {/* Group for the openable pane and its handle - this group is animated */}
                <g ref={openPaneGroupRef}>
                  <path
                    d="M 40 40 H 120 V 210 H 40 Z" // Path for the pane
                    fill="hsl(var(--primary-foreground)/0.15)"
                    stroke="hsl(var(--primary-foreground)/0.7)"
                    strokeWidth="3"
                    // style={{ transformOrigin: "40px 125px" }} // GSAP handles origin
                  />
                  {/* Handle on this pane */}
                  <rect
                    x="110" // Position relative to the path's left edge (40) + desired offset
                    y="115" // Vertical center of the handle on the pane
                    width="6"
                    height="20"
                    rx="2"
                    fill="hsl(var(--primary-foreground)/0.6)"
                    // style={{ transformOrigin: "40px 125px" }} // GSAP handles origin for group
                  />
                </g>

                {/* Fixed pane or mullion to the right of the open one */}
                <rect x="125" y="40" width="85" height="170" fill="hsl(var(--primary-foreground)/0.05)" stroke="hsl(var(--primary-foreground)/0.4)" strokeWidth="2" rx="2"/>
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
