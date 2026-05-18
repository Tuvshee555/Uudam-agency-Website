import CTA from "@/components/CTA";
import Destinations from "@/components/Destinations";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JournalGallery from "@/components/JournalGallery";
import Navbar from "@/components/Navbar";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import WhyUudamTravel from "@/components/WhyUudamTravel";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Уудам Аялал",
  description:
    "Улаанбаатараас гарах дээд зэрэглэлийн аяллыг сонгомол чиглэл, хувийн анхаарал, цэгцтэй төлөвлөлтөөр бүтээдэг аяллын агентлаг.",
  telephone: "+976-7713-6633",
  email: "uudamtravel6@gmail.com",
  areaServed: "Монгол Улс",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Улаанбаатар",
    addressCountry: "MN",
  },
  sameAs: [
    "https://www.facebook.com/uudamtravelagency",
    "https://wa.me/97677136633",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-(--color-canvas) text-(--color-copy-strong)">
        <Navbar />
        <Hero />
        <Destinations />
        <Packages />
        <WhyUudamTravel />
        <Experience />
        <Testimonials />
        <JournalGallery />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
