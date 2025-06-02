import * as React from "react";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { ProductGrid } from "./ProductGrid";
import { Footer } from "./Footer";

function AromaLandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <HeroSection />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default AromaLandingPage;
