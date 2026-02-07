# 🍽️ Plantilla Web para Restaurantes - Next.js

Una plantilla web profesional, moderna y completamente configurable para restaurantes. Optimizada para conversión y fácil de personalizar sin necesidad de editar código.

## ✨ Características Principales

### 🎯 100% Configurable
- **Un solo archivo de configuración**: Cambia toda la web desde `config/restaurant.config.ts`
- **Sin editar código**: Personaliza textos, imágenes, colores, menú y contacto fácilmente
- **Reutilizable**: Usa la misma plantilla para múltiples restaurantes

### 🎨 Diseño Profesional
- **Hero Section Impactante**: Con imagen de fondo, estadísticas y CTAs
- **Navegación Intuitiva**: Menú sticky responsive con smooth scroll
- **Animaciones Sutiles**: Efectos hover y transiciones suaves
- **Paleta de Colores Premium**: Fácil de personalizar desde Tailwind

### 📱 Optimizado para Conversión
- **Botón WhatsApp Flotante**: Siempre visible para reservas rápidas
- **Múltiples CTAs**: Estratégicamente ubicados en toda la página
- **Diseño Mobile-First**: Optimizado para dispositivos móviles
- **Carga Rápida**: Performance optimizado y SEO-friendly

### 📱 Secciones Incluidas
1. **Hero**: Presentación principal con CTAs destacados
2. **Nosotros**: Historia, valores y propuesta de valor
3. **Menú**: Carta completa organizada por categorías
4. **Galería**: Fotos del restaurante y platos
5. **Reservas**: Contacto por WhatsApp + teléfono
6. **Opiniones**: Testimonios de clientes (mock)
7. **Mapa**: Google Maps embebido
8. **Footer**: Información completa y redes sociales

### 🔧 Stack Técnico
- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Fuentes**: Google Fonts (Inter & Playfair Display)

## 🚀 Inicio Rápido

### Instalación

1. **Navega al directorio del proyecto**
```bash
cd demoRestaurante
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Personaliza tu restaurante**
Edita el archivo `config/restaurant.config.ts` con:
- Nombre de tu restaurante
- Teléfono y WhatsApp
- Dirección y coordenadas
- Menú completo
- Imágenes
- Redes sociales
- Y mucho más...

4. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

5. **Abre en el navegador**
```
http://localhost:3000
```

### ⚙️ Personalización Rápida

**El archivo `config/restaurant.config.ts` centraliza TODA la configuración:**

```typescript
export const restaurantConfig = {
  name: "Tu Restaurante",
  tagline: "Tu eslogan",
  contact: {
    phone: "+34 123 456 789",
    whatsapp: "34123456789",
    email: "info@turestaurante.com",
    address: { /* ... */ },
  },
  menu: {
    categories: [ /* Tu menú completo */ ],
  },
  // ... y mucho más
};
```

**📖 Para una guía completa de personalización, consulta:**  
👉 [README.TEMPLATE.md](README.TEMPLATE.md)

## 📁 Estructura del Proyecto

```
demoRestaurante/
├── config/
│   └── restaurant.config.ts   # ⭐ ARCHIVO DE CONFIGURACIÓN PRINCIPAL
├── app/
│   ├── layout.tsx             # Layout con SEO metadata
│   ├── page.tsx               # Página principal
│   └── globals.css            # Estilos globales
├── components/
│   ├── Navbar.tsx             # Navegación sticky
│   ├── Hero.tsx               # Sección hero
│   ├── About.tsx              # Sobre nosotros
│   ├── Menu.tsx               # Carta del restaurante
│   ├── Gallery.tsx            # Galería de imágenes
│   ├── Reservations.tsx       # Contacto y reservas
│   ├── Reviews.tsx            # Opiniones de clientes
│   ├── Map.tsx                # Google Maps
│   ├── Footer.tsx             # Footer completo
│   └── WhatsAppButton.tsx     # Botón flotante WhatsApp
├── tailwind.config.ts         # Configuración de colores
└── package.json
```

## 🎨 Cómo Personalizar

### 1️⃣ Información Básica
En `config/restaurant.config.ts`:
- `name`: Nombre del restaurante
- `tagline`: Eslogan o claim
- `description`: Descripción breve

### 2️⃣ Contacto y Reservas
- `contact.phone`: Teléfono clicable
- `contact.whatsapp`: Número de WhatsApp (sin espacios)
- `contact.email`: Email de contacto
- `contact.address`: Dirección completa
- `contact.maps.embedUrl`: URL de Google Maps embed

### 3️⃣ Menú / Carta
```typescript
menu: {
  categories: [
    {
      name: "Entrantes",
      icon: "Utensils",
      items: [
        { name: "Plato", description: "Desc", price: "15€" }
      ]
    }
  ]
}
```

### 4️⃣ Galería de Fotos
Sube tus fotos y actualiza las URLs en:
```typescript
gallery: {
  images: [
    { url: "ruta/foto.jpg", alt: "Descripción" }
  ]
}
```

### 5️⃣ Colores y Branding
Edita `tailwind.config.ts` para cambiar la paleta de colores:
```typescript
colors: {
  primary: {
    500: '#tu-color-principal',
    // ...
  }
}
```

**📖 Guía Completa:** Ver [README.TEMPLATE.md](README.TEMPLATE.md) para instrucciones detalladas.

## 🎯 Componentes Incluidos

1. **Hero**: Presentación principal con CTAs destacados
2. **Nosotros**: Historia, valores y propuesta de valor
3. **Menú**: Carta completa organizada por categorías
4. **Galería**: Fotos del restaurante y platos
5. **Reservas**: Contacto por WhatsApp + teléfono
6. **Opiniones**: Testimonios de clientes
7. **Mapa**: Google Maps embebido
8. **Footer**: Información completa y redes sociales
9. **Botón WhatsApp Flotante**: Acceso rápido a reservas

## 📋 Checklist de Personalización

Antes de lanzar tu web:

- [ ] Cambiar nombre del restaurante en config
- [ ] Actualizar teléfono y WhatsApp
- [ ] Configurar email de contacto
- [ ] Actualizar dirección física
- [ ] Configurar Google Maps con tu ubicación
- [ ] Personalizar el menú completo
- [ ] Subir fotos reales del restaurante
- [ ] Actualizar horarios de apertura
- [ ] Configurar enlaces de redes sociales
- [ ] Personalizar textos de Hero y About
- [ ] Añadir reseñas reales de clientes
- [ ] Optimizar metadata SEO
- [ ] Cambiar paleta de colores (opcional)

## 🛠️ Stack Técnico
- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Fuentes**: Google Fonts (Inter & Playfair Display)

## 📦 Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Producción
npm run build
npm start

# Linting
npm run lint
```

## 🌟 Características de Diseño

- ✅ Responsive (móvil, tablet, desktop)
- ✅ Animaciones suaves y profesionales
- ✅ Optimizado para SEO
- ✅ Metadata Open Graph para redes sociales
- ✅ Accesibilidad (ARIA labels)
- ✅ Performance optimizado
- ✅ Imágenes lazy-load

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
vercel
```

### Netlify
1. Conecta tu repositorio
2. Build command: `npm run build`
3. Output directory: `.next`

## 📈 SEO Optimizado

- ✅ Metadata completa (title, description, keywords)
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ Etiquetas semánticas HTML5
- ✅ Alt tags en imágenes
- ✅ URLs amigables con smooth scroll
- ✅ Estructuración de headings (H1, H2, H3)

## 🎯 Cómo Usar para Múltiples Restaurantes

1. Duplica el proyecto completo
2. Cambia solo el archivo `config/restaurant.config.ts`
3. Personaliza colores en `tailwind.config.ts` (opcional)
4. ¡Listo! Nueva web en minutos

## 💡 Tips de Conversión

1. **WhatsApp claro**: El botón flotante debe ser verde y visible
2. **Fotos de calidad**: Invierte en fotografía profesional
3. **Menú actualizado**: Revisa precios regularmente
4. **Reseñas reales**: Usa testimonios verdaderos
5. **CTAs visibles**: "Reservar" siempre accesible
6. **Carga rápida**: Optimiza imágenes (< 200KB)

## 📖 Documentación Adicional

- **Guía de Personalización**: [README.TEMPLATE.md](README.TEMPLATE.md)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## 🆘 Solución de Problemas

**Error al instalar:**
```bash
# Limpia caché
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**El WhatsApp no funciona:**
- Verifica que el número esté sin espacios ni símbolos
- Formato correcto: `34912345678` (código país + número)

**Google Maps no se ve:**
- Asegúrate de que la URL embed es correcta
- Verifica que no tiene restricciones de dominio

## 📄 Licencia

Plantilla libre para uso personal y comercial.

## 🤝 Soporte

¿Necesitas ayuda? Revisa:
1. [README.TEMPLATE.md](README.TEMPLATE.md) - Guía completa
2. Los comentarios en `restaurant.config.ts`
3. La documentación de Next.js

---

**Desarrollado con ❤️ usando Next.js 14, TypeScript y Tailwind CSS**

**¿Te gusta la plantilla? ⭐ Dale una estrella al proyecto!**
