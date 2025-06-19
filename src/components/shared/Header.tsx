
"use client"; // Required for useState

import React, { useState } from 'react';
import Link from 'next/link';
import { Building2, Menu as MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#ai-recommendation', label: 'AI Helper' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-card text-primary-foreground py-3 px-4 sm:px-6 md:px-10 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl sm:text-2xl font-headline font-bold flex items-center gap-2 text-primary hover:opacity-90 transition-opacity">
          <Building2 className="h-6 w-6 sm:h-7 sm:w-7 transform group-hover:rotate-[-5deg] transition-transform duration-300" />
          Nanchang Ethiopia
        </Link>

        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-card-foreground hover:text-accent transition-colors font-medium">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[300px] bg-card p-0">
              <div className="p-5 flex flex-col h-full">
                <div className="mb-8">
                  <SheetClose asChild>
                  <Link href="/" className="text-xl font-headline font-bold flex items-center gap-2 text-primary">
                    <Building2 className="h-7 w-7" />
                    Nanchang Ethiopia
                  </Link>
                  </SheetClose>
                </div>
                <ul className="space-y-3 flex-grow">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className="block py-2.5 px-3 rounded-md text-lg text-card-foreground hover:bg-primary/10 hover:text-accent transition-colors"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                 <div className="mt-auto pt-6 border-t border-border">
                    <SheetClose asChild>
                      <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                          <Link href="#contact">Contact Us</Link>
                      </Button>
                    </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
export default Header;
