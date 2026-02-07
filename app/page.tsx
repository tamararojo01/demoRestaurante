import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Reservations from '@/components/Reservations';
import Reviews from '@/components/Reviews';
import Map from '@/components/Map';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reservations />
      <Reviews />
      <Map />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
