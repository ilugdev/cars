import React from "react";

import Header from "components/Header";
import HeroSection from "components/HeroSection";
import FiltersSection from "components/FiltersSection";
import LoadContent from "components/LoadContent";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FiltersSection />
      <LoadContent />
    </>
  );
}
