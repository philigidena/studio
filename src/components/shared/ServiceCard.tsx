"use client";
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface ServiceCardProps {
  serviceName: string;
  imageUrl: string;
  description: string;
  imageHint: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ serviceName, imageUrl, description, imageHint }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const cardElement = cardRef.current;
      // Ensure GSAP targets a specific element for animation if needed, or applies to the whole card.
      // For simple hover, Tailwind transitions might be enough, but GSAP is requested.
      
      const tl = gsap.timeline({ paused: true });

      tl.to(cardElement, {
        y: -8,
        scale: 1.03,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        duration: 0.3,
        ease: 'power2.out',
      });

      cardElement.addEventListener('mouseenter', () => tl.play());
      cardElement.addEventListener('mouseleave', () => tl.reverse());

      return () => {
        // Safely remove event listeners
        if (cardElement) {
            cardElement.removeEventListener('mouseenter', () => tl.play());
            cardElement.removeEventListener('mouseleave', () => tl.reverse());
        }
        tl.kill(); // Kill the timeline to free up resources
      };
    }
  }, []);

  return (
    <Card ref={cardRef} className="overflow-hidden bg-card hover:shadow-2xl rounded-lg h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="aspect-[16/10] relative w-full">
          <Image
            src={imageUrl}
            alt={serviceName}
            layout="fill"
            objectFit="cover"
            data-ai-hint={imageHint}
            className="rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <CardTitle className="text-xl font-headline mb-2 text-primary">{serviceName}</CardTitle>
        <CardDescription className="text-sm text-foreground flex-grow">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
