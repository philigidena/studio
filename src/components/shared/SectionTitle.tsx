"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, className, subtitle }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentTitleRef = titleRef.current;
    const currentSubtitleRef = subtitleRef.current;
    const currentContainerRef = containerRef.current;

    if (currentContainerRef) { // Use container as a single trigger for both
      if (currentTitleRef) {
        gsap.fromTo(currentTitleRef,
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            scrollTrigger: { 
              trigger: currentContainerRef, 
              start: "top 85%", 
              toggleActions: "play none none none" 
            } 
          }
        );
      }
      if (currentSubtitleRef) {
        gsap.fromTo(currentSubtitleRef,
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            delay: 0.15, 
            scrollTrigger: { 
              trigger: currentContainerRef, 
              start: "top 85%", 
              toggleActions: "play none none none" 
            } 
          }
        );
      }
    }
  }, []);

  return (
    <div ref={containerRef} className={`mb-10 md:mb-12 text-center ${className}`}>
      <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-primary">
        {children}
      </h2>
      {subtitle && (
        <p ref={subtitleRef} className="mt-2 md:mt-3 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
