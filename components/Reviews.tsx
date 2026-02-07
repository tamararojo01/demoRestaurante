import { Star, Quote } from 'lucide-react';
import { restaurantConfig } from '@/config/restaurant.config';

export default function Reviews() {
  const { reviews } = restaurantConfig;
  
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Opiniones
          </span>
          <h2 className="heading-md mt-3 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-neutral-600 text-lg">
            Más de {reviews.totalReviews} reseñas de 5 estrellas en {reviews.platform}. La satisfacción de nuestros 
            clientes es nuestra mejor carta de presentación.
          </p>

          {/* Google Rating Summary */}
          <div className="flex items-center justify-center gap-4 mt-8 p-6 bg-neutral-50 rounded-2xl inline-flex">
            <div className="text-center">
              <div className="text-5xl font-bold text-neutral-900 font-serif">{reviews.overallRating}</div>
              <div className="flex gap-1 mt-2">
                {renderStars(5)}
              </div>
              <div className="text-sm text-neutral-600 mt-1">{reviews.totalReviews} reseñas en {reviews.platform}</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.testimonials.map((review, idx) => (
            <div key={idx} className="card p-6 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-200">
                <Quote size={32} />
              </div>

              {/* Rating */}
              <div className="mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Comment */}
              <p className="text-neutral-700 mb-6 leading-relaxed">
                &ldquo;{review.comment}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">{review.name}</div>
                  <div className="text-sm text-neutral-500">{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-4">¿Quieres ver más opiniones?</p>
          <a
            href="https://www.google.com/maps/search/restaurantes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-semibold transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
}
