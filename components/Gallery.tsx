import { restaurantConfig } from '@/config/restaurant.config';

export default function Gallery() {
  const { gallery, social } = restaurantConfig;
  
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Galería
          </span>
          <h2 className="heading-md mt-3 mb-4">
            {gallery.title}
          </h2>
          <p className="text-neutral-600 text-lg">
            {gallery.description}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.images.map((image, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${image.url}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/0 to-neutral-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-4">Síguenos en Instagram para más contenido</p>
          <a
            href={social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-semibold transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            {social.instagram.handle}
          </a>
        </div>
      </div>
    </section>
  );
}
