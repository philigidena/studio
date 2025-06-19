
"use client";
import React, { useEffect, useRef } from 'react';
import ProjectCard from '../shared/ProjectCard';
import { SectionTitle } from '../shared/SectionTitle';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: '1',
    projectName: 'Commercial Building Facade - Addis Ababa',
    description: 'State-of-the-art aluminum and glass facade for a new multi-story office complex in the city center.',
    imageUrl: 'https://globalsolariums.com/wp-content/uploads/2021/06/sunroom1-global-solarium-1080x675.jpeg',
    imageHint: 'modern building',
  },
  {
    id: '2',
    projectName: 'Luxury Residential Villa - Bole',
    description: 'Complete installation of premium aluminum windows, sliding doors, and balustrades for a luxury villa.',
    imageUrl: 'https://www.pfgglass.com/wp-content/uploads/2020/08/19951-80a-Street-Langley-Carsten-Arnold-Photography-44-1024x684.jpg',
    imageHint: 'luxury house',
  },
  {
    id: '3',
    projectName: 'Shopping Mall Skylight & Entrance - CMC Area',
    description: 'Design and installation of a large-span aluminum skylight and impressive main entrance for a new shopping mall.',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/10/455101838/JE/VA/DM/225116810/aluminium-casement-door.jpeg',
    imageHint: 'shopping mall',
  },
   {
    id: '4',
    projectName: 'University Campus Renovation',
    description: 'Upgrading an existing university campus with energy-efficient aluminum windows and modern curtain walling.',
    imageUrl: 'https://konig.vn/wp-content/uploads/2023/09/RISDH94-1.jpg',
    imageHint: 'university building',
  },
  {
    id: '5',
    projectName: 'Boutique Hotel - Kazanchis',
    description: 'Custom aluminum solutions including uniquely designed window frames and decorative elements for a boutique hotel.',
    imageUrl: 'https://www.pfgglass.com/wp-content/uploads/2020/08/19951-80a-Street-Langley-Carsten-Arnold-Photography-44-1024x684.jpg',
    imageHint: 'hotel exterior',
  },
  {
    id: '6',
    projectName: 'Industrial Park Warehouses',
    description: 'Robust and functional aluminum doors and windows for large-scale industrial warehouses, ensuring security and durability.',
    imageUrl: 'https://globalsolariums.com/wp-content/uploads/2021/06/sunroom1-global-solarium-1080x675.jpeg',
    imageHint: 'industrial warehouse',
  },
];

const ProjectPortfolio = () => {
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
    <section id="portfolio" ref={sectionRef} className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-6 md:px-10">
        <SectionTitle subtitle="Witness our dedication to excellence. Explore a curated selection of Nanchang's completed projects, demonstrating our mastery in aluminum fabrication, meticulous installation, and innovative design solutions across diverse commercial and residential applications.">
          Our Portfolio
        </SectionTitle>
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              projectName={project.projectName}
              imageUrl={project.imageUrl}
              description={project.description}
              imageHint={project.imageHint}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPortfolio;
