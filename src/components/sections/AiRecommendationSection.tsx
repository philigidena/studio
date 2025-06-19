
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { recommendService, type RecommendServiceInput, type RecommendServiceOutput } from '@/ai/flows/service-recommendation';
import { SectionTitle } from '../shared/SectionTitle';
import { useToast } from "@/hooks/use-toast";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AiRecommendationSection = () => {
  const [needsDescription, setNeedsDescription] = useState('');
  const [recommendation, setRecommendation] = useState<RecommendServiceOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentCardRef = cardRef.current;
    const currentTextareaRef = textareaRef.current;
    const currentButtonRef = buttonRef.current;
    
    if (currentCardRef) {
      gsap.fromTo(currentCardRef,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: currentCardRef,
            start: "top 85%",
            toggleActions: "play none none none",
            onEnter: () => { 
              if (currentTextareaRef) {
                gsap.fromTo(currentTextareaRef,
                  { opacity: 0, x: -30 },
                  { opacity: 1, x: 0, duration: 0.6, delay: 0.2, ease: 'power2.out' }
                );
              }
              if (currentButtonRef) {
                gsap.fromTo(currentButtonRef,
                  { opacity: 0, y: 30 },
                  { opacity: 1, y: 0, duration: 0.6, delay: 0.35, ease: 'power2.out' }
                );
              }
            }
          }
        }
      );
    }
  }, []);

  useEffect(() => {
    const currentResultRef = resultRef.current;
    if (recommendation && currentResultRef && cardRef.current) {
      gsap.fromTo(currentResultRef,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.7, 
          delay: 0.1, 
          ease: 'power3.out' 
        }
      );
    }
  }, [recommendation]);


  const handleRecommend = async () => {
    if (!needsDescription.trim()) {
      toast({
        title: "Input Required",
        description: "Please describe your aluminum needs before requesting a recommendation.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    setRecommendation(null);

    try {
      const input: RecommendServiceInput = { needsDescription };
      const result = await recommendService(input);
      if (result && result.recommendedService) {
        setRecommendation(result);
        toast({
            title: "Recommendation Ready!",
            description: "Our AI has suggested a service for you.",
        });
      } else {
        throw new Error("AI did not return a valid recommendation.");
      }
    } catch (err) {
      console.error('AI Recommendation Error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to get recommendation. Please try again.';
      toast({
        title: "AI Error",
        description: errorMessage,
        variant: "destructive",
      });
      setRecommendation(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-recommendation" ref={sectionRef} className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <SectionTitle subtitle="Not sure which service is right for you? Describe your project or needs, and our AI assistant will suggest the best Nanchang service.">
          AI Service Helper
        </SectionTitle>
        <Card ref={cardRef} className="max-w-2xl mx-auto shadow-xl bg-card rounded-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary text-xl sm:text-2xl font-headline">
              <Wand2 size={26} />
              Describe Your Needs
            </CardTitle>
            <CardDescription>
              Provide details like project type, desired features, or specific problems you're trying to solve with aluminum products. For example: "I need energy-efficient windows for a new residential building in a noisy area" or "Looking for sleek, modern aluminum partitions for an office space."
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              ref={textareaRef}
              placeholder="Enter your needs here..."
              value={needsDescription}
              onChange={(e) => setNeedsDescription(e.target.value)}
              rows={5}
              className="bg-input focus:bg-input/80 text-sm sm:text-base"
              aria-label="Describe your aluminum needs"
            />
            <Button ref={buttonRef} onClick={handleRecommend} disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 text-sm sm:text-base font-semibold">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Analyzing & Recommending...
                </>
              ) : (
                'Get AI Recommendation'
              )}
            </Button>
          </CardContent>
          
          {recommendation && (
            <CardFooter ref={resultRef} className="flex flex-col items-start gap-4 p-4 sm:p-6 border-t border-border mt-4">
              <h3 className="text-lg sm:text-xl font-headline font-semibold text-primary">AI Recommendation:</h3>
              <div className="bg-primary/10 p-3 sm:p-4 rounded-md w-full">
                <p className="font-bold text-md sm:text-lg text-primary mb-1">{recommendation.recommendedService}</p>
                <p className="text-xs sm:text-sm text-foreground">{recommendation.reasoning}</p>
              </div>
            </CardFooter>
          )}
        </Card>
      </div>
    </section>
  );
};

export default AiRecommendationSection;
