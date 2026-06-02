import SceneWrapper from "../../components/storytelling/SceneWrapper";
import NarrativeTitle from "../../components/storytelling/NarrativeTitle";

export default function PromptSection() {
  return (
    <SceneWrapper>
      <div
        style={{
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "1rem 2rem",
          borderRadius: "12px",
          marginBottom: "1rem",
          color: "white",
        }}
      >
        Build an AI startup
      </div>
      <NarrativeTitle text="Questions become prompts." />
    </SceneWrapper>
  );
}