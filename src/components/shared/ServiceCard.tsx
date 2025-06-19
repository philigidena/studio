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
    const cardElement = cardRef.current;
    const imageElement = cardElement?.querySelector('img');

    if (cardElement) {
      const tl = gsap.timeline({ paused: true });

      tl.to(cardElement, {
        y: -8,
        scale: 1.03,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        duration: 0.3,
        ease: 'power2.out',
      });

      if (imageElement) {
        tl.to(imageElement, {
          scale: 1.1, 
          duration: 0.3,
          ease: 'power2.out',
        }, 0); 
      }

      cardElement.addEventListener('mouseenter', () => tl.play());
      cardElement.addEventListener('mouseleave', () => tl.reverse());

      return () => {
        if (cardElement) {
            cardElement.removeEventListener('mouseenter', () => tl.play());
            cardElement.removeEventListener('mouseleave', () => tl.reverse());
        }
        tl.kill(); 
      };
    }
  }, []);

  return (
    <Card ref={cardRef} className="overflow-hidden bg-card hover:shadow-2xl rounded-lg h-full flex flex-col group">
      <CardHeader className="p-0">
        <div className="aspect-[16/10] relative w-full overflow-hidden rounded-t-lg">
          <Image
            src={imageUrl}
            alt={serviceName}
            layout="fill"
            objectFit="cover"
            data-ai-hint={imageHint}
            className="rounded-t-lg"
          />
          <div className="absolute inset-0 bg-[hsl(var(--primary)/0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out rounded-t-lg pointer-events-none"></div>
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
