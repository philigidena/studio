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

  useEffect(() => {
    const refs = [formCardRef.current, infoCardRef.current];
    refs.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(ref,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.7, delay: index * 0.15, ease: 'power3.out',
            scrollTrigger: {
              trigger: ref,
              start: "top 85%",
              toggleActions: "play none none none",
            }
          }
        );
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
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">Phone</h4>
                    <a href="tel:+251123456789" className="text-muted-foreground hover:text-accent transition-colors block">
                      +251 123 456 789
                    </a>
                     <a href="tel:+251987654321" className="text-muted-foreground hover:text-accent transition-colors block">
                      +251 987 654 321
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">Email</h4>
                    <a href="mailto:info@nanchangethiopia.com" className="text-muted-foreground hover:text-accent transition-colors">
                      info@nanchangethiopia.com
                    </a>
                     <p className="text-sm text-muted-foreground">We typically reply within 24 hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">Office Address</h4>
                    <p className="text-muted-foreground">123 Aluminum Street, Bole Sub-City, Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
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
