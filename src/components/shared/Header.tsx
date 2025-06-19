import Link from 'next/link';
import { Building2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 md:px-10 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-3xl font-headline font-bold flex items-center gap-3 hover:opacity-90 transition-opacity">
          <Building2 size={36} className="transform group-hover:rotate-[-5deg] transition-transform duration-300" />
          Nanchang Ethiopia
        </Link>
        <nav>
          <ul className="flex space-x-4 md:space-x-6">
            <li><Link href="#services" className="hover:text-accent transition-colors font-medium">Services</Link></li>
            <li><Link href="#portfolio" className="hover:text-accent transition-colors font-medium">Portfolio</Link></li>
            <li><Link href="#ai-recommendation" className="hover:text-accent transition-colors font-medium">AI Helper</Link></li>
            <li><Link href="#contact" className="hover:text-accent transition-colors font-medium">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
