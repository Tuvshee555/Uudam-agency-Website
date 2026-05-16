import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsMarquee from "@/components/StatsMarquee";
import Destinations from "@/components/Destinations";
import Packages from "@/components/Packages";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsMarquee />
      <Destinations />
      <Packages />
      <Experience />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
