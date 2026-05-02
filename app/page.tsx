import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <FAQ />
      <Experience />
      <Footer />
    </main>
  );
}
