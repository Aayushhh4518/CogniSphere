import { useEffect } from 'react';
import HeroSection from "./sections/Hero/HeroSection";
import NarrativeEngine from "./sections/NarrativeEngine/NarrativeEngine";
import IntelligenceFlow from "./sections/IntelligenceFlow/IntelligenceFlow";
import GlobalCanvas from "./components/canvas/GlobalCanvas";
import { initSmoothScroll } from "./lib/smooth-scroll";

import ModelsSection from "./sections/Models/ModelsSection";
import TokensSection from "./sections/Tokens/TokensSection";
import ContextSection from "./sections/Context/ContextSection";
import RagSection from "./sections/Rag/RagSection";
import AgentsSection from "./sections/Agents/AgentsSection";
import ToolsSection from "./sections/Tools/ToolsSection";
import EconomySection from "./sections/Economy/EconomySection";
import PlatformSection from "./sections/Platform/PlatformSection";

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
        <ModelsSection />
        <TokensSection />
        <ContextSection />
        <RagSection />
        <AgentsSection />
        <ToolsSection />
        <EconomySection />
        <PlatformSection />
      </div>
    </>
  );
}

export default App;