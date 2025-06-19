
"use client";
import React from 'react';
import ServiceCard from '../shared/ServiceCard';
import { SectionTitle } from '../shared/SectionTitle';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const services = [
  {
    id: '1',
    serviceName: 'Sliding Windows',
    description: 'Modern and space-saving sliding windows, offering smooth operation and panoramic views for any property.',
    imageUrl: 'https://premiumwindows.com/wp-content/uploads/2020/03/TimelessW-Horizontal_sliding-Front-2.jpg',
    imageHint: 'sliding window modern',
  },
  {
    id: '2',
    serviceName: 'Sliding Doors',
    description: 'Elegant sliding doors that seamlessly connect indoor and outdoor spaces, enhancing light and accessibility.',
    imageUrl: 'https://www.stockwindows.com.au/wp-content/uploads/2024/05/Aluminium_Door_Black_2100h_1450w.png',
    imageHint: 'sliding door patio',
  },
  {
    id: '3',
    serviceName: 'Casement Windows',
    description: 'Versatile casement windows offering excellent ventilation and security, available in various styles.',
    imageUrl: 'https://www.kanodwindows.com/wp-content/uploads/2024/06/Should-We-Replace-Single-Pane-Aluminum-Window-1.png',
    imageHint: 'casement window house',
  },
  {
    id: '4',
    serviceName: 'Casement Doors',
    description: 'Durable and stylish casement doors providing robust performance and a classic look for entrances and patios.',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/10/455101838/JE/VA/DM/225116810/aluminium-casement-door.jpeg',
    imageHint: 'casement door french',
  },
  {
    id: '5',
    serviceName: 'Office Partitions',
    description: 'Customizable aluminum and glass office partitions to create modern, functional, and flexible workspaces.',
    imageUrl: 'https://innovativeofficepartitions.com.au/wp-content/uploads/2019/10/glass-partitions-for-office-meeting-rooms-in-sydney.jpg',
    imageHint: 'office partition glass',
  },
  {
    id: '6',
    serviceName: 'Floor Spring Doors',
    description: 'Sleek glass doors with floor spring mechanisms for a minimalist aesthetic and smooth, controlled movement.',
    imageUrl: 'https://image.made-in-china.com/2f0j00sCQGTEAaOUow/Floor-Spring-Door-Aluminum-Glass-Doors-Swing-Door-Automatic-Swing-Door-Closer.jpg',
    imageHint: 'glass door commercial',
  },
  {
    id: '7',
    serviceName: 'Glass Curtain Walls',
    description: 'Sophisticated glass curtain wall systems for striking building facades that maximize natural light and energy efficiency.',
    imageUrl: 'https://www.pfgglass.com/wp-content/uploads/2020/08/19951-80a-Street-Langley-Carsten-Arnold-Photography-44-1024x684.jpg',
    imageHint: 'building glass facade',
  },
  {
    id: '8',
    serviceName: 'Sunrooms',
    description: 'Beautifully crafted aluminum sunrooms and conservatories, extending your living space with light and comfort.',
    imageUrl: 'https://globalsolariums.com/wp-content/uploads/2021/06/sunroom1-global-solarium-1080x675.jpeg',
    imageHint: 'sunroom house extension',
  },
  {
    id: '9',
    serviceName: 'Hanging Rail Doors',
    description: 'Contemporary hanging rail doors (barn doors) that offer a unique design element and save space.',
    imageUrl: 'https://konig.vn/wp-content/uploads/2023/09/RISDH94-1.jpg',
    imageHint: 'barn door interior',
  },
  {
    id: '10',
    serviceName: 'Stair Handrails',
    description: 'Secure and elegant aluminum stair handrails, combining safety with modern design for staircases.',
    imageUrl: 'https://m.media-amazon.com/images/I/61nV07TaAZL.jpg',
    imageHint: 'modern stair railing',
  },
];

const ServiceShowcase = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <SectionTitle subtitle="Explore our wide range of aluminum solutions designed for durability, style, and performance.">
          Our Services
        </SectionTitle>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000, // Changed from 4000ms to 3000ms for a faster pace
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            })
          ]}
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {services.map((service) => (
              <CarouselItem key={service.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <ServiceCard
                    serviceName={service.serviceName}
                    imageUrl={service.imageUrl}
                    description={service.description}
                    imageHint={service.imageHint}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex left-1 md:left-2 bg-card/70 hover:bg-card border-border text-foreground" />
          <CarouselNext className="hidden sm:flex right-1 md:right-2 bg-card/70 hover:bg-card border-border text-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default ServiceShowcase;
