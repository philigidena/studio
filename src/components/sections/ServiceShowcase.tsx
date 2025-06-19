
"use client";
import React, { useEffect, useRef } from 'react';
import ServiceCard from '../shared/ServiceCard';
import { SectionTitle } from '../shared/SectionTitle';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: '1',
    serviceName: 'Sliding Windows',
    description: 'Modern and space-saving sliding windows, offering smooth operation and panoramic views for any property.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'sliding window',
  },
  {
    id: '2',
    serviceName: 'Sliding Doors',
    description: 'Elegant sliding doors that seamlessly connect indoor and outdoor spaces, enhancing light and accessibility.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'sliding door',
  },
  {
    id: '3',
    serviceName: 'Casement Windows',
    description: 'Versatile casement windows offering excellent ventilation and security, available in various styles.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'casement window',
  },
  {
    id: '4',
    serviceName: 'Casement Doors',
    description: 'Durable and stylish casement doors providing robust performance and a classic look for entrances and patios.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'casement door',
  },
  {
    id: '5',
    serviceName: 'Office Partitions',
    description: 'Customizable aluminum and glass office partitions to create modern, functional, and flexible workspaces.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'office partition',
  },
  {
    id: '6',
    serviceName: 'Floor Spring Doors',
    description: 'Sleek glass doors with floor spring mechanisms for a minimalist aesthetic and smooth, controlled movement.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'glass door',
  },
  {
    id: '7',
    serviceName: 'Glass Curtain Walls',
    description: 'Sophisticated glass curtain wall systems for striking building facades that maximize natural light and energy efficiency.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'glass facade',
  },
  {
    id: '8',
    serviceName: 'Sunrooms',
    description: 'Beautifully crafted aluminum sunrooms and conservatories, extending your living space with light and comfort.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'glass sunroom',
  },
  {
    id: '9',
    serviceName: 'Hanging Rail Doors',
    description: 'Contemporary hanging rail doors (barn doors) that offer a unique design element and save space.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'hanging door',
  },
  {
    id: '10',
    serviceName: 'Stair Handrails',
    description: 'Secure and elegant aluminum stair handrails, combining safety with modern design for staircases.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'stair railing',
  },
];

const ServiceShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsContainerRef.current?.children;
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        }
      );
    }
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <SectionTitle subtitle="Explore our wide range of aluminum solutions designed for durability, style, and performance.">
          Our Services
        </SectionTitle>
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              serviceName={service.serviceName}
              imageUrl={service.imageUrl}
              description={service.description}
              imageHint={service.imageHint}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
