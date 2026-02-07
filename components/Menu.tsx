import { Utensils, Coffee, Cookie, Wine } from 'lucide-react';
import { restaurantConfig } from '@/config/restaurant.config';

export default function Menu() {
  const { menu } = restaurantConfig;
  
  // Icon mapping
  const getIcon = (iconName: string) => {
    const icons: Record<string, any> = {
      Utensils,
      Coffee,
      Cookie,
      Wine,
    };
    return icons[iconName] || Utensils;
  };

  return (
    <section id="menu" className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            {menu.sectionTitle}
          </span>
          <h2 className="heading-md mt-3 mb-4">
            {menu.sectionSubtitle}
          </h2>
          <p className="text-neutral-600 text-lg">
            {menu.sectionDescription}
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {menu.categories.map((category, idx) => {
            const IconComponent = getIcon(category.icon);
            return (
              <div key={idx} className="card p-8">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-200">
                  <div className="text-primary-500">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-neutral-900">
                    {category.name}
                  </h3>
                </div>

                {/* Menu Items */}
                <div className="space-y-6">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h4 className="font-semibold text-neutral-900 group-hover:text-primary-500 transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-primary-600 font-bold whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#reservations" className="btn-primary">
            <Coffee size={20} />
            Reserva tu Mesa
          </a>
        </div>
      </div>
    </section>
  );
}
