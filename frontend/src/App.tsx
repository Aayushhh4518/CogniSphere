import { useEffect } from 'react';
import HeroSection from "./sections/Hero/HeroSection";
import GlobalCanvas from "./components/canvas/GlobalCanvas";
import { initSmoothScroll } from "./lib/smooth-scroll";

import HumanSection from "./sections/Human/HumanSection";
import ThoughtSection from "./sections/Thought/ThoughtSection";
import QuestionSection from "./sections/Question/QuestionSection";
import PromptSection from "./sections/Prompt/PromptSection";
import IntelligenceFlow from "./sections/IntelligenceFlow/IntelligenceFlow";
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
      <div style={{ position: "relative", zIndex: 10, backgroundColor: "transparent" }}>
        <HeroSection />
        <HumanSection />
        <ThoughtSection />
        <QuestionSection />
        <PromptSection />
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