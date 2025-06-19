"use client";
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface ProjectCardProps {
  projectName: string;
  imageUrl: string;
  description?: string;
  imageHint: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, imageUrl, description, imageHint }) => {
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null); // Though Next/Image doesn't directly expose img, we target its wrapper

  useEffect(() => {
    const imageWrapperElement = imageWrapperRef.current;
    // GSAP needs a direct DOM element to animate. Next/Image renders an <img> tag eventually.
    // We animate the wrapper or the first <img> child of the wrapper.
    const imageElement = imageWrapperElement?.querySelector('img');


    if (imageWrapperElement && imageElement) {
      const tlImage = gsap.timeline({ paused: true });
      tlImage.to(imageElement, { scale: 1.08, duration: 0.4, ease: 'power2.out' });

      imageWrapperElement.addEventListener('mouseenter', () => tlImage.play());
      imageWrapperElement.addEventListener('mouseleave', () => tlImage.reverse());
      
      return () => {
        if (imageWrapperElement) {
            imageWrapperElement.removeEventListener('mouseenter', () => tlImage.play());
            imageWrapperElement.removeEventListener('mouseleave', () => tlImage.reverse());
        }
        tlImage.kill();
      };
    }
  }, []);

  return (
    <Card className="overflow-hidden bg-card shadow-lg rounded-lg group flex flex-col h-full">
      <CardHeader className="p-0">
        <div ref={imageWrapperRef} className="aspect-[16/10] relative w-full overflow-hidden rounded-t-lg">
          <Image
            ref={imageRef} // This ref is for conceptual targeting; GSAP targets the actual <img> tag via querySelector
            src={imageUrl}
            alt={projectName}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-400 ease-out" // Fallback or complementary
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <CardTitle className="text-xl font-headline text-primary">{projectName}</CardTitle>
        {description && <CardDescription className="text-sm text-foreground mt-2 flex-grow">{description}</CardDescription>}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
