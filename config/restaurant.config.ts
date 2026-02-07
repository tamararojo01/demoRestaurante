/**
 * 🍽️ CONFIGURACIÓN DEL RESTAURANTE
 * 
 * Este archivo centraliza toda la información del restaurante.
 * Edita los valores aquí para personalizar la web fácilmente.
 */

export const restaurantConfig = {
  // ========================================
  // INFORMACIÓN BÁSICA
  // ========================================
  name: "La Mesa Urbana",
  tagline: "Cocina Moderna de Autor",
  description: "Una experiencia gastronómica única en el corazón de la ciudad. Ingredientes frescos, sabores auténticos y un ambiente inolvidable.",
  
  // ========================================
  // BRANDING Y COLORES
  // ========================================
  branding: {
    // Logo (puede ser una imagen o texto)
    logo: {
      type: "text", // "text" o "image"
      text: "La Mesa Urbana", // Si type es "text"
      imageUrl: "", // Si type es "image", pon la URL aquí
    },
    // Colores principales (formato Tailwind CSS)
    colors: {
      primary: "primary", // Usa la paleta definida en tailwind.config.ts
      // O define colores personalizados aquí:
      // primary: "#f0710b",
      // secondary: "#1c1917",
    },
  },

  // ========================================
  // CONTACTO
  // ========================================
  contact: {
    phone: "+34 912 345 678",
    phoneDisplay: "+34 912 345 678",
    whatsapp: "34600000000", // Número sin espacios ni símbolos
    whatsappMessage: "Hola, me gustaría hacer una reserva en La Mesa Urbana",
    email: "reservas@lamesaurbana.com",
    address: {
      street: "Calle Gourmet, 25",
      city: "Madrid",
      postalCode: "28001",
      country: "España",
      full: "Calle Gourmet, 25, 28001 Madrid, España",
    },
    // Coordenadas para Google Maps
    maps: {
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4285766788583!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287e1b48e5b7%3A0x3d0b3f2b8c3e8c6f!2sMadrid%2C%20Spain!5e0!3m2!1sen!2ses!4v1234567890",
      searchUrl: "https://www.google.com/maps/search/restaurantes+madrid",
    },
  },

  // ========================================
  // HORARIOS
  // ========================================
  hours: {
    monday: { lunch: "13:00 - 16:00", dinner: "20:00 - 23:30", closed: false },
    tuesday: { lunch: "13:00 - 16:00", dinner: "20:00 - 23:30", closed: false },
    wednesday: { lunch: "13:00 - 16:00", dinner: "20:00 - 23:30", closed: false },
    thursday: { lunch: "13:00 - 16:00", dinner: "20:00 - 23:30", closed: false },
    friday: { lunch: "13:00 - 16:30", dinner: "20:00 - 00:30", closed: false },
    saturday: { lunch: "13:00 - 16:30", dinner: "20:00 - 00:30", closed: false },
    sunday: { lunch: "13:00 - 16:30", dinner: "", closed: false },
  },
  hoursDisplay: {
    weekdays: "Lun - Jue: 13:00 - 16:00, 20:00 - 23:30",
    weekend: "Vie - Sáb: 13:00 - 16:30, 20:00 - 00:30",
    sunday: "Domingo: 13:00 - 16:30",
  },

  // ========================================
  // HERO SECTION
  // ========================================
  hero: {
    backgroundImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
    title: "Bienvenido a",
    titleHighlight: "La Mesa Urbana",
    subtitle: "Una experiencia gastronómica única en el corazón de la ciudad. Ingredientes frescos, sabores auténticos y un ambiente inolvidable.",
    stats: [
      { value: "12+", label: "Años de Experiencia" },
      { value: "4.9", label: "Rating Google" },
      { value: "150+", label: "Platos Únicos" },
    ],
  },

  // ========================================
  // SOBRE NOSOTROS
  // ========================================
  about: {
    badge: "Nuestra Historia",
    title: "Pasión por la Gastronomía desde 2014",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
    description: [
      "En La Mesa Urbana creemos que cada comida es una celebración. Desde nuestros inicios, nos hemos dedicado a ofrecer una experiencia culinaria única que combina ingredientes locales frescos con técnicas modernas de cocina de autor.",
      "Nuestro chef ejecutivo, con más de 15 años de experiencia internacional, ha creado un menú que refleja tanto la tradición como la innovación, honrando los sabores auténticos mientras explora nuevas fronteras gastronómicas.",
    ],
    yearsInBusiness: 12,
    values: [
      { icon: "ChefHat", title: "Calidad Premium", description: "Ingredientes seleccionados" },
      { icon: "Heart", title: "Con Amor", description: "Cada plato es especial" },
      { icon: "MapPin", title: "Local", description: "Productos de cercanía" },
    ],
  },

  // ========================================
  // MENÚ / CARTA
  // ========================================
  menu: {
    sectionTitle: "Nuestra Carta",
    sectionSubtitle: "Un Viaje de Sabores Auténticos",
    sectionDescription: "Descubre nuestros platos elaborados con ingredientes frescos y de temporada. Cada receta es una experiencia única.",
    categories: [
      {
        name: "Entrantes",
        icon: "Utensils",
        items: [
          {
            name: "Tartar de Atún Rojo",
            description: "Aguacate, sésamo negro, salsa ponzu y chips de wasabi",
            price: "18€",
          },
          {
            name: "Croquetas Caseras",
            description: "Jamón ibérico, trufa negra y aioli de pimentón",
            price: "14€",
          },
          {
            name: "Pulpo a la Brasa",
            description: "Parmentier de patata, pimentón de la Vera y aceite de oliva",
            price: "22€",
          },
          {
            name: "Ensalada Burrata",
            description: "Tomate heritage, albahaca fresca y reducción balsámica",
            price: "16€",
          },
        ],
      },
      {
        name: "Platos Principales",
        icon: "Utensils",
        items: [
          {
            name: "Solomillo de Ternera",
            description: "Salsa de vino tinto, puré de patata trufado y espárragos",
            price: "32€",
          },
          {
            name: "Lubina Salvaje",
            description: "Risotto de azafrán, espárragos verdes y espuma de limón",
            price: "28€",
          },
          {
            name: "Magret de Pato",
            description: "Reducción de frutos rojos, parmentier y verduras de temporada",
            price: "26€",
          },
          {
            name: "Ravioli de Langosta",
            description: "Pasta fresca, bisque de mariscos y caviar de arenque",
            price: "30€",
          },
        ],
      },
      {
        name: "Postres",
        icon: "Cookie",
        items: [
          {
            name: "Tarta de Queso",
            description: "Coulis de frutos rojos y crumble de pistacho",
            price: "9€",
          },
          {
            name: "Coulant de Chocolate",
            description: "Helado de vainilla bourbon y crujiente de avellana",
            price: "10€",
          },
          {
            name: "Tiramisú Casero",
            description: "Café artesanal, mascarpone y cacao puro",
            price: "8€",
          },
          {
            name: "Sorbete de Limón",
            description: "Con cava y hierbabuena fresca",
            price: "7€",
          },
        ],
      },
      {
        name: "Bebidas",
        icon: "Wine",
        items: [
          {
            name: "Vino Blanco",
            description: "Selección de bodegas premium",
            price: "desde 18€",
          },
          {
            name: "Vino Tinto",
            description: "Crianza, reserva y gran reserva",
            price: "desde 22€",
          },
          {
            name: "Cócteles de Autor",
            description: "Creaciones únicas del bartender",
            price: "12€",
          },
          {
            name: "Café Specialty",
            description: "Origen único, tostado artesanal",
            price: "3.5€",
          },
        ],
      },
    ],
  },

  // ========================================
  // GALERÍA
  // ========================================
  gallery: {
    title: "Una Experiencia Visual",
    description: "Descubre nuestros platos, ambiente y momentos únicos a través de estas imágenes.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070",
        alt: "Plato gourmet de la carta de La Mesa Urbana",
      },
      {
        url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2070",
        alt: "Ensalada fresca con ingredientes de temporada",
      },
      {
        url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2070",
        alt: "Pizza artesanal del horno de piedra",
      },
      {
        url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080",
        alt: "Ensalada mediterránea con productos frescos",
      },
      {
        url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074",
        alt: "Interior elegante del restaurante La Mesa Urbana",
      },
      {
        url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070",
        alt: "Postre gourmet con presentación artística",
      },
    ],
  },

  // ========================================
  // RESEÑAS
  // ========================================
  reviews: {
    overallRating: 4.9,
    totalReviews: 542,
    platform: "Google",
    testimonials: [
      {
        name: "María González",
        avatar: "MG",
        rating: 5,
        comment: "Una experiencia gastronómica excepcional. El tartar de atún estaba espectacular y el servicio impecable. Sin duda volveremos para celebrar ocasiones especiales.",
        date: "Hace 2 semanas",
      },
      {
        name: "Carlos Ramírez",
        avatar: "CR",
        rating: 5,
        comment: "El mejor restaurante de la zona sin duda. La calidad de los ingredientes se nota en cada bocado. El solomillo estaba en su punto perfecto. Ambiente elegante y acogedor.",
        date: "Hace 1 mes",
      },
      {
        name: "Ana López",
        avatar: "AL",
        rating: 5,
        comment: "Celebramos nuestro aniversario aquí y fue maravilloso. El personal fue muy atento y nos hicieron sentir especiales. Los postres son arte comestible. Totalmente recomendable.",
        date: "Hace 3 semanas",
      },
      {
        name: "Javier Martín",
        avatar: "JM",
        rating: 5,
        comment: "Comida deliciosa, presentación impecable y un ambiente perfecto para una cena romántica. La carta de vinos es excelente. El chef realmente sabe lo que hace.",
        date: "Hace 1 semana",
      },
      {
        name: "Laura Sánchez",
        avatar: "LS",
        rating: 5,
        comment: "Fue una experiencia memorable. Cada plato superó nuestras expectativas. El pulpo a la brasa es increíble. Definitivamente un lugar para recomendar a amigos y familia.",
        date: "Hace 2 meses",
      },
      {
        name: "Roberto Díaz",
        avatar: "RD",
        rating: 5,
        comment: "Excelente en todos los aspectos. Desde la bienvenida hasta el último bocado. La relación calidad-precio es muy buena considerando la calidad de la comida y el servicio.",
        date: "Hace 1 mes",
      },
    ],
  },

  // ========================================
  // REDES SOCIALES
  // ========================================
  social: {
    instagram: {
      url: "https://instagram.com/lamesaurbana",
      handle: "@lamesaurbana",
    },
    facebook: {
      url: "https://facebook.com/lamesaurbana",
      handle: "lamesaurbana",
    },
    twitter: {
      url: "https://twitter.com/lamesaurbana",
      handle: "@lamesaurbana",
    },
  },

  // ========================================
  // SEO & METADATA
  // ========================================
  seo: {
    title: "La Mesa Urbana - Restaurante Moderno en el Centro de la Ciudad",
    description: "Descubre La Mesa Urbana, restaurante moderno con cocina de autor. Vive una experiencia gastronómica única en el corazón de la ciudad. Reserva ahora por WhatsApp.",
    keywords: ["restaurante", "cocina moderna", "gastronomía", "reservas", "La Mesa Urbana", "comida gourmet"],
    ogImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
  },

  // ========================================
  // RESERVAS Y NOTAS
  // ========================================
  reservations: {
    groupSize: 8,
    advanceNotice: "48 horas",
    specialNote: "Para grupos de más de 8 personas, por favor contacta con nosotros con al menos 48 horas de antelación. Ofrecemos menús especiales para eventos y celebraciones.",
  },
};

// Tipos TypeScript para mejor autocompletado
export type RestaurantConfig = typeof restaurantConfig;
