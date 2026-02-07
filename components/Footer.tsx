import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { restaurantConfig } from '@/config/restaurant.config';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { name, description, contact, hoursDisplay, social } = restaurantConfig;

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              {name}
            </h3>
            <p className="text-neutral-400 mb-6">
              {description}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-500 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={social.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-500 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  {contact.address.street}<br />
                  {contact.address.postalCode} {contact.address.city}, {contact.address.country}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary-500 mt-1 flex-shrink-0" />
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-sm hover:text-primary-500 transition-colors">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary-500 mt-1 flex-shrink-0" />
                <a href={`mailto:${contact.email}`} className="text-sm hover:text-primary-500 transition-colors">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Clock size={18} className="text-primary-500" />
              Horarios
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-neutral-400">Lunes - Jueves:</span>
                <span>13:00 - 23:30</span>
              </li>
              <li className="flex justify-between">
                <span className="text-neutral-400">Viernes - Sábado:</span>
                <span>13:00 - 00:30</span>
              </li>
              <li className="flex justify-between">
                <span className="text-neutral-400">Domingo:</span>
                <span>13:00 - 16:30</span>
              </li>
              <li className="pt-2 border-t border-neutral-800 text-primary-400">
                Servicio continuo de cocina
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-primary-500 transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-primary-500 transition-colors">
                  Ver Menú Completo
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary-500 transition-colors">
                  Galería de Fotos
                </a>
              </li>
              <li>
                <a href="#reservations" className="hover:text-primary-500 transition-colors">
                  Hacer una Reserva
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${contact.whatsapp}?text=Hola,%20tengo%20una%20pregunta`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 transition-colors"
                >
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <p>
              © {currentYear} {name}. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-500 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
