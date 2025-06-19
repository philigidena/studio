import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Building2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <Link href="/" className="text-xl font-headline font-bold flex items-center gap-2 text-primary-foreground mb-3">
            <Building2 size={28} />
            Nanchang Ethiopia
          </Link>
          <p className="text-sm">
            Your trusted partner for high-quality aluminum windows, doors, curtain walls, and custom fabrication in Ethiopia.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-headline font-semibold text-primary-foreground mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#services" className="hover:text-accent transition-colors">Our Services</Link></li>
            <li><Link href="#portfolio" className="hover:text-accent transition-colors">Project Portfolio</Link></li>
            <li><Link href="#ai-recommendation" className="hover:text-accent transition-colors">AI Service Helper</Link></li>
            <li><Link href="#contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-headline font-semibold text-primary-foreground mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent" />
              <a href="tel:+251123456789" className="hover:text-accent transition-colors">+251 123 456 789</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent" />
              <a href="mailto:info@nanchangethiopia.com" className="hover:text-accent transition-colors">info@nanchangethiopia.com</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent mt-1" />
              <span>123 Aluminum St, Bole, Addis Ababa, Ethiopia</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-headline font-semibold text-primary-foreground mb-4">Working Hours</h3>
          <ul className="space-y-2 text-sm">
            <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
            <li>Saturday: 9:00 AM - 1:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm border-t border-gray-700 pt-6">
        <p>&copy; {currentYear} Nanchang Ethiopia. All rights reserved. Designed with excellence.</p>
      </div>
    </footer>
  );
};
export default Footer;
