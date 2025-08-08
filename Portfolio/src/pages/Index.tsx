import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { PortfolioSection } from "@/components/sections/portfolio";
import { ContactSection } from "@/components/sections/contact";
import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Portfolio() {
  const location = useLocation();

  // Handle hash links in URL
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: (element as HTMLElement).offsetTop - 80,
            behavior: "smooth",
          });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />
          <AboutSection />
          <PortfolioSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
