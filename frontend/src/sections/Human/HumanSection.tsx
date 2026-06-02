import SceneWrapper from "../../components/storytelling/SceneWrapper";
import NarrativeTitle from "../../components/storytelling/NarrativeTitle";
import GlowNode from "../../components/storytelling/GlowNode";

export default function HumanSection() {
  return (
    <SceneWrapper>
      <GlowNode />
      <NarrativeTitle text="Everything begins with a human." />
    </SceneWrapper>
  );
}