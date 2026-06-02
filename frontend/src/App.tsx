import { useEffect } from 'react';
import HeroSection from "./sections/Hero/HeroSection";
import NarrativeEngine from "./sections/NarrativeEngine/NarrativeEngine";
import IntelligenceFlow from "./sections/IntelligenceFlow/IntelligenceFlow";
import GlobalCanvas from "./components/canvas/GlobalCanvas";
import { initSmoothScroll } from "./lib/smooth-scroll";

function App() {
  useEffect(() => {
    const lenis = initSmoothScroll();
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <GlobalCanvas />
      <div className="relative z-0">
        <HeroSection />
        <NarrativeEngine />
        <IntelligenceFlow />
      </div>
    </>
  );
}

export default App;