
"use client";
import React, { useEffect, useRef } from 'react';
import { InquiryForm } from './InquiryForm';
import { SectionTitle } from '../shared/SectionTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ContactSection = () => {
  const formCardRef = useRef<HTMLDivElement>(null);
  const infoCardRef = useRef<HTMLDivElement>(null);
  
  const phoneIconRef = useRef<HTMLDivElement>(null);
  const mailIconRef = useRef<HTMLDivElement>(null);
  const mapIconRef = useRef<HTMLDivElement>(null);
  const clockIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const formEl = formCardRef.current;
    const infoEl = infoCardRef.current;

    if (formEl) {
      gsap.fromTo(formEl,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: {
            trigger: formEl,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        }
      );
    }
    if (infoEl) {
       gsap.fromTo(infoEl,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.7, delay: 0.15, ease: 'power3.out',
          scrollTrigger: {
            trigger: infoEl,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        }
      );
    }

    const iconRefs = [phoneIconRef.current, mailIconRef.current, mapIconRef.current, clockIconRef.current];
    iconRefs.forEach((iconRef) => {
      if (iconRef) {
        const tl = gsap.timeline({ paused: true });
        tl.to(iconRef, { scale: 1.15, y: -4, duration: 0.2, ease: 'power2.out' });

        iconRef.addEventListener('mouseenter', () => tl.play());
        iconRef.addEventListener('mouseleave', () => tl.reverse());
        
        return () => {
          iconRef.removeEventListener('mouseenter', () => tl.play());
          iconRef.removeEventListener('mouseleave', () => tl.reverse());
          tl.kill();
        };
      }
    });

  }, []);

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <SectionTitle subtitle="Have a question or a project in mind? We'd love to hear from you. Reach out using the form or our contact details below.">
          Get In Touch
        </SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-3">
            <Card ref={formCardRef} className="bg-card shadow-xl rounded-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you promptly.</CardDescription>
              </CardHeader>
              <CardContent>
                <InquiryForm />
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card ref={infoCardRef} className="bg-card shadow-xl rounded-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary">Contact Information</CardTitle>
                <CardDescription>You can also reach us directly:</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div ref={phoneIconRef} className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0 cursor-pointer">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">Phone</h4>
                    <a href="tel:+251907308888" className="text-muted-foreground hover:text-accent transition-colors block">
                      +251 907 308 888
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div ref={mailIconRef} className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0 cursor-pointer">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">Email</h4>
                    <a href="mailto:nanchangmaterials@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                      nanchangmaterials@gmail.com
                    </a>
                     <p className="text-sm text-muted-foreground">We typically reply within 24 hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div ref={mapIconRef} className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0 cursor-pointer">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">Office Address</h4>
                    <p className="text-muted-foreground">Nifas Silk Lafto Sub-city, Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4 group">
                  <div ref={clockIconRef} className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0 cursor-pointer">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">Working Hours</h4>
                    <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
