import { restaurantConfig } from '@/config/restaurant.config';

export default function Map() {
  const { contact, name } = restaurantConfig;
  
  return (
    <section id="map" className="relative h-[500px] w-full">
      {/* Google Maps Embed */}
      <iframe
        src={contact.maps.embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Ubicación de ${name} en Google Maps`}
        className="grayscale hover:grayscale-0 transition-all duration-300"
      />

      {/* Overlay Card */}
      <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-sm hidden md:block">
        <h3 className="text-xl font-bold font-serif text-neutral-900 mb-2">
          Encuéntranos Aquí
        </h3>
        <p className="text-neutral-600 mb-4">
          {contact.address.street}<br />
          {contact.address.postalCode} {contact.address.city}, {contact.address.country}
        </p>
        <a
          href={contact.maps.searchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-500 hover:text-primary-600 font-semibold text-sm inline-flex items-center gap-2"
        >
          Abrir en Google Maps
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
