import SceneWrapper from "../../components/storytelling/SceneWrapper";
import NarrativeTitle from "../../components/storytelling/NarrativeTitle";

export default function QuestionSection() {
  return (
    <SceneWrapper>
      <div style={{ color: "#3B82F6", fontSize: "3rem", marginBottom: "1rem" }}>?</div>
      <NarrativeTitle text="Curiosity becomes a question." />
    </SceneWrapper>
  );
}