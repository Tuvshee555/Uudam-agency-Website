import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Experience from "@/components/Experience";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import StatsMarquee from "@/components/StatsMarquee";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsMarquee />
      <Destinations />
      <Experience />
      <Packages />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
