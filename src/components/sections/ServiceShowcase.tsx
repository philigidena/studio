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
    serviceName: 'Aluminum Windows',
    description: 'High-quality, durable aluminum windows for modern residential and commercial buildings, offering excellent insulation and aesthetic appeal.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'aluminum window',
  },
  {
    id: '2',
    serviceName: 'Aluminum Doors',
    description: 'Secure and stylish aluminum doors available in various designs, perfect for main entrances, patios, and internal use.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'aluminum door',
  },
  {
    id: '3',
    serviceName: 'Curtain Walling Systems',
    description: 'Elegant and robust curtain wall systems that provide a modern facade for buildings, maximizing natural light.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'curtain wall',
  },
  {
    id: '4',
    serviceName: 'Custom Aluminum Fabrication',
    description: 'Bespoke aluminum fabrication services tailored to unique architectural requirements, including decorative panels and structures.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'aluminum fabrication',
  },
  {
    id: '5',
    serviceName: 'Shop Fronts & Entrances',
    description: 'Attractive and durable aluminum shop fronts and commercial entrances designed to enhance your business visibility.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'shop front',
  },
  {
    id: '6',
    serviceName: 'Aluminum Railings & Balustrades',
    description: 'Safe and stylish aluminum railings and balustrades for balconies, stairs, and terraces, offering modern design and low maintenance.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'aluminum railing',
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
