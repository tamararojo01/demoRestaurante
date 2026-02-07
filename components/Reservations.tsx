import { MessageCircle, Phone, Clock, MapPin } from 'lucide-react';
import { restaurantConfig } from '@/config/restaurant.config';

export default function Reservations() {
  const { contact, hoursDisplay, reservations } = restaurantConfig;
  
  return (
    <section id="reservations" className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Reservas
            </span>
            <h2 className="heading-md mt-3 mb-4">
              Reserva tu Experiencia
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Asegura tu mesa en {restaurantConfig.name}. Contacta con nosotros por WhatsApp 
              o llámanos directamente.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* WhatsApp Card */}
            <div className="card p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Reserva por WhatsApp
              </h3>
              <p className="text-neutral-600 mb-6">
                Respuesta inmediata las 24 horas
              </p>
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-green-500 hover:bg-green-600"
              >
                Enviar WhatsApp
              </a>
            </div>

            {/* Phone Card */}
            <div className="card p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Llámanos Directamente
              </h3>
              <p className="text-neutral-600 mb-6">
                Atención personalizada de 12:00 a 23:00
              </p>
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="btn-secondary"
              >
                {contact.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Hours */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-primary-500 mt-1">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Horarios</h4>
                  <p className="text-sm text-neutral-600">{hoursDisplay.weekdays}</p>
                  <p className="text-sm text-neutral-600">{hoursDisplay.weekend}</p>
                  <p className="text-sm text-neutral-600">{hoursDisplay.sunday}</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-primary-500 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Ubicación</h4>
                  <p className="text-sm text-neutral-600">
                    {contact.address.street}<br />
                    {contact.address.postalCode} {contact.address.city}, {contact.address.country}
                  </p>
                  <a
                    href="#map"
                    className="text-sm text-primary-500 hover:text-primary-600 font-medium mt-2 inline-block"
                  >
                    Ver en el mapa →
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-xl shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-4">
                <div className="text-primary-500 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Email</h4>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-primary-500 hover:text-primary-600"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-8 bg-white p-6 rounded-xl border-l-4 border-primary-500">
            <p className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-900">Nota importante:</span> {reservations.specialNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
