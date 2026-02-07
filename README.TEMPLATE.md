# 🎨 Plantilla de Restaurante - Guía de Personalización

Esta es una plantilla completamente configurable para crear páginas web profesionales de restaurantes. Toda la información está centralizada en un solo archivo de configuración.

## 🚀 Inicio Rápido

### 1. Instalación
```bash
npm install
npm run dev
```

### 2. Personalización
Edita el archivo `config/restaurant.config.ts` con la información de tu restaurante.

---

## 📋 Configuración Paso a Paso

### ✏️ Información Básica
```typescript
name: "Nombre de tu Restaurante",
tagline: "Tu claim o eslogan",
description: "Descripción breve de tu restaurante",
```

### 🎨 Branding y Logo
```typescript
branding: {
  logo: {
    type: "text", // Cambia a "image" para usar logo
    text: "Nombre del Restaurante",
    imageUrl: "/logo.png", // Si usas imagen
  },
}
```

### 📞 Información de Contacto
```typescript
contact: {
  phone: "+34 912 345 678",
  phoneDisplay: "+34 912 345 678",
  whatsapp: "34912345678", // Sin espacios ni +
  whatsappMessage: "Mensaje predeterminado",
  email: "info@turestaurante.com",
  address: {
    street: "Tu Calle, 123",
    city: "Tu Ciudad",
    postalCode: "12345",
    country: "España",
  },
}
```

**📍 Importante - Google Maps:**
1. Ve a [Google Maps](https://www.google.com/maps)
2. Busca tu dirección
3. Click en "Compartir" → "Insertar un mapa"
4. Copia la URL del `src` del iframe
5. Pégala en `contact.maps.embedUrl`

### ⏰ Horarios
```typescript
hoursDisplay: {
  weekdays: "Lun - Vie: 12:00 - 23:00",
  weekend: "Sáb - Dom: 12:00 - 01:00",
  sunday: "Domingo: 12:00 - 17:00",
}
```

### 🍽️ Hero Section
```typescript
hero: {
  backgroundImage: "https://tu-imagen.jpg",
  title: "Bienvenido a",
  titleHighlight: "Tu Restaurante",
  subtitle: "Tu propuesta de valor única",
  stats: [
    { value: "10+", label: "Años de Experiencia" },
    { value: "5.0", label: "Rating Google" },
    { value: "200+", label: "Platos Deliciosos" },
  ],
}
```

### 📖 Sobre Nosotros
```typescript
about: {
  badge: "Nuestra Historia",
  title: "Pasión por la Gastronomía desde 2010",
  image: "https://imagen-restaurante.jpg",
  description: [
    "Primer párrafo de tu historia...",
    "Segundo párrafo...",
  ],
  yearsInBusiness: 14,
  values: [
    { 
      icon: "ChefHat", // Opciones: ChefHat, Heart, MapPin
      title: "Título", 
      description: "Descripción" 
    },
  ],
}
```

### 🍴 Menú / Carta

Añade tantas categorías como necesites:

```typescript
menu: {
  categories: [
    {
      name: "Entrantes",
      icon: "Utensils", // Opciones: Utensils, Cookie, Wine, Coffee
      items: [
        {
          name: "Nombre del Plato",
          description: "Descripción deliciosa",
          price: "12€",
        },
        // Más platos...
      ],
    },
    // Más categorías...
  ],
}
```

### 📸 Galería

Reemplaza las URLs de Unsplash con tus propias fotos:

```typescript
gallery: {
  title: "Título de la Galería",
  description: "Descripción",
  images: [
    {
      url: "https://tu-imagen-1.jpg",
      alt: "Descripción para SEO",
    },
    // Mínimo 6 imágenes recomendadas
  ],
}
```

**💡 Tip:** Usa imágenes de alta calidad (1920x1080px mínimo) y optimizadas.

### ⭐ Reseñas

Personaliza las opiniones de tus clientes:

```typescript
reviews: {
  overallRating: 4.9,
  totalReviews: 542,
  platform: "Google",
  testimonials: [
    {
      name: "Nombre Cliente",
      avatar: "NC", // Iniciales
      rating: 5,
      comment: "Comentario del cliente...",
      date: "Hace 1 semana",
    },
    // Mínimo 6 reseñas
  ],
}
```

### 🌐 Redes Sociales

```typescript
social: {
  instagram: {
    url: "https://instagram.com/turestaurante",
    handle: "@turestaurante",
  },
  facebook: {
    url: "https://facebook.com/turestaurante",
    handle: "turestaurante",
  },
  twitter: {
    url: "https://twitter.com/turestaurante",
    handle: "@turestaurante",
  },
}
```

### 🔍 SEO y Metadata

```typescript
seo: {
  title: "Tu Restaurante - Descripción Breve | Ciudad",
  description: "Descripción de 150-160 caracteres para Google",
  keywords: ["palabra", "clave", "relevante"],
  ogImage: "https://imagen-para-compartir.jpg",
}
```

---

## 🎨 Personalización Avanzada

### Cambiar Colores

Edita `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#fff7ed',   // Muy claro
    100: '#ffedd5',
    // ... hasta
    900: '#7c2d12', // Muy oscuro
  },
}
```

**Paletas de colores recomendadas:**
- Italiano: Rojos/Naranjas (#dc2626, #ea580c)
- Japonés: Negro/Rojos (#991b1b, #1c1917)
- Mediterráneo: Azules/Blancos (#0ea5e9, #0369a1)
- Mexicano: Amarillos/Rojos (#eab308, #dc2626)

### Añadir Fuentes Personalizadas

Edita `app/layout.tsx`:

```typescript
import { Tu_Fuente } from "next/font/google";

const tuFuente = Tu_Fuente({ 
  subsets: ["latin"],
  variable: '--font-custom',
});
```

Luego actualiza `tailwind.config.ts`:

```typescript
fontFamily: {
  custom: ['var(--font-custom)'],
}
```

---

## 📱 Checklist de Lanzamiento

Antes de publicar tu web, verifica:

- [ ] Todas las URLs de WhatsApp tienen tu número correcto
- [ ] El teléfono es clicable y correcto
- [ ] El email funciona
- [ ] Google Maps muestra tu ubicación real
- [ ] Todas las imágenes cargan correctamente
- [ ] Los enlaces de redes sociales son correctos
- [ ] Los precios del menú están actualizados
- [ ] Los horarios son correctos
- [ ] El SEO title y description están optimizados
- [ ] Todos los textos están sin errores ortográficos
- [ ] La página es responsive (prueba en móvil)

---

## 🖼️ Gestión de Imágenes

### Recomendaciones:

1. **Hero Background**: 1920x1080px (landscape)
2. **About Image**: 1000x1000px (cuadrada)
3. **Gallery**: 800x800px mínimo (cuadradas)
4. **Formato**: JPG optimizado o WebP
5. **Peso**: Máximo 200KB por imagen

### Dónde hospedar imágenes:

- **Propio servidor**: `/public/images/`
- **Unsplash**: Gratis, alta calidad
- **Cloudinary**: CDN gratuito con optimización
- **ImgBB**: Hosting gratuito de imágenes

---

## 🚀 Despliegue

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Netlify

1. Haz push a GitHub
2. Conecta tu repo en Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

---

## 💡 Tips de Conversión

Para mejorar las reservas:

1. **WhatsApp claro y visible**: El botón flotante es clave
2. **Fotos de calidad**: Invierte en fotografía profesional
3. **Menú actualizado**: Mantén precios y platos al día
4. **Reseñas reales**: Usa testimonios verdaderos
5. **Llamadas a la acción**: "Reservar" debe estar siempre visible
6. **Horarios claros**: Evita confusiones sobre apertura
7. **Google Maps preciso**: Facilita que te encuentren

---

## ❓ Preguntas Frecuentes

**¿Puedo usar esto para varios restaurantes?**
Sí, solo duplica el proyecto y cambia el archivo de configuración.

**¿Necesito saber programar?**
No para cambiar textos, imágenes y configuración básica. Sí para cambios de diseño complejos.

**¿Cómo añado más platos al menú?**
Edita `menu.categories[x].items` en el config y añade objetos con name, description y price.

**¿Puedo cambiar el diseño?**
Sí, todos los componentes están en `/components` y puedes editarlos.

**¿Es responsive?**
Sí, está optimizado para móviles, tablets y escritorio.

---

## 📞 Soporte

Si necesitas ayuda, revisa:
- El archivo `README.md` principal
- Los comentarios en `restaurant.config.ts`
- La documentación de Next.js: https://nextjs.org

---

**¡Felicidades! 🎉 Tu web de restaurante está lista para personalizar y lanzar.**
