import HeroSection from "./sections/Hero/HeroSection";
import HumanSection from "./sections/Human/HumanSection";
import ThoughtSection from "./sections/Thought/ThoughtSection";
import PromptSection from "./sections/Prompt/PromptSection";
import QuestionSection from "./sections/Question/QuestionSection";
import NarrativeFlow from "./sections/NarrativeFlow/NarrativeFlow"; 

function App() {
  return (
    <>
      <HeroSection />
      <HumanSection />
      <ThoughtSection />
      <QuestionSection />
      <PromptSection />
      <NarrativeFlow />
    </>
  );
}

export default App;