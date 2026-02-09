'use client';

import { MessageCircle } from 'lucide-react';
import { restaurantConfig } from '@/config/restaurant.config';

export default function Hero() {
  const { hero, contact } = restaurantConfig;
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/70 via-neutral-900/50 to-primary-900/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${hero.backgroundImage}')`,
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-block">
            <span className="bg-primary-500/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-primary-500/30">
              {restaurantConfig.tagline}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-xl text-white text-balance leading-tight">
            {hero.title}<br />
            <span className="text-primary-400">{hero.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-neutral-200 text-balance max-w-2xl mx-auto">
            {hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={20} />
              Reservar por WhatsApp
            </a>
            <a
              href="#menu"
              className="btn-secondary bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              Ver carta
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            {hero.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-primary-400 font-serif">{stat.value}</div>
                <div className="text-neutral-300 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
