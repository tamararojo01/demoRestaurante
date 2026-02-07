import { ChefHat, Heart, MapPin } from 'lucide-react';
import { restaurantConfig } from '@/config/restaurant.config';

export default function About() {
  const { about, name } = restaurantConfig;
  
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${about.image}')`,
                }}
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-6 rounded-2xl shadow-xl max-w-xs">
              <p className="text-4xl font-bold font-serif">{about.yearsInBusiness}+</p>
              <p className="text-sm">Años creando experiencias memorables</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
                {about.badge}
              </span>
              <h2 className="heading-md mt-3">
                {about.title}
              </h2>
            </div>

            {about.description.map((paragraph, idx) => (
              <p key={idx} className="text-neutral-600 text-lg leading-relaxed">
                {idx === 0 && (
                  <>
                    En <span className="font-semibold text-neutral-900">{name}</span> creemos que cada comida 
                    es una celebración. {paragraph.replace(/^En [\w\s]+ creemos que cada comida es una celebración\.\s*/, '')}
                  </>
                )}
                {idx !== 0 && paragraph}
              </p>
            ))}

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              {about.values.map((value, idx) => {
                const Icon = value.icon === 'ChefHat' ? ChefHat : value.icon === 'Heart' ? Heart : MapPin;
                return (
                  <div key={idx} className="text-center sm:text-left">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-xl mb-3">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-neutral-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
