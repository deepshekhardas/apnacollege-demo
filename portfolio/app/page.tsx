import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Chatbot from './sections/Chatbot';
import ThemeSwitcher from './components/ThemeSwitcher';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <ThemeSwitcher />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Chatbot />
      <Footer />
    </main>
  );
}
