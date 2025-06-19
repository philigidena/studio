import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, className, subtitle }) => {
  return (
    <div className={`mb-10 md:mb-12 text-center ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-primary">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-2 md:mt-3 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
