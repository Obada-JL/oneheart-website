"use client";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import SliderComponent from "./Components/HomePage/SliderComponent";
import AboutPart from "./Components/HomePage/AboutPart";
import DonatePart from "./Components/HomePage/DonatePart";
import Programs from "./Components/HomePage/Programs";
import RecentCampagins from "./Components/HomePage/RecentCampagins";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <PageTransition>
      <main className="HomePage flex-1">
        <SliderComponent />
        <AboutPart />
        <DonatePart />
        <Programs />
        <RecentCampagins />
      </main>

      {/* Hero Section */}
      <AnimatedSection>
        <div className="hero-section">{/* ... hero content ... */}</div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection delay={0.2} direction="up">
        <div className="stats-section">{/* ... stats content ... */}</div>
      </AnimatedSection>

      {/* Other sections with different directions and delays */}
      <AnimatedSection delay={0.3} direction="left">
        {/* ... */}
      </AnimatedSection>

      <AnimatedSection delay={0.4} direction="right">
        {/* ... */}
      </AnimatedSection>
    </PageTransition>
  );
}
