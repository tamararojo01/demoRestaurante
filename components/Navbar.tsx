'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { restaurantConfig } from '@/config/restaurant.config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Menú', href: '#menu' },
    { label: 'Galería', href: '#gallery' },
    { label: 'Reservar', href: '#reservations' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="text-2xl font-serif font-bold text-neutral-900 hover:text-primary-500 transition-colors">
            {restaurantConfig.branding.logo.type === 'text' 
              ? restaurantConfig.branding.logo.text 
              : <Image src={restaurantConfig.branding.logo.imageUrl} alt={restaurantConfig.name} width={120} height={40} className="h-10 w-auto" />}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-neutral-700 hover:text-primary-500 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${restaurantConfig.contact.whatsapp}?text=${encodeURIComponent(restaurantConfig.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-6 py-3"
            >
              Reservar Ahora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-700 hover:text-primary-500 font-medium transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`https://wa.me/${restaurantConfig.contact.whatsapp}?text=${encodeURIComponent(restaurantConfig.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-6 py-3 justify-center"
              >
                Reservar Ahora
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
