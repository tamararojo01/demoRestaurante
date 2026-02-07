'use client';

import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { restaurantConfig } from '@/config/restaurant.config';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a
      href={`https://wa.me/${restaurantConfig.contact.whatsapp}?text=${encodeURIComponent(restaurantConfig.contact.whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} className="animate-pulse" />
    </a>
  );
}
