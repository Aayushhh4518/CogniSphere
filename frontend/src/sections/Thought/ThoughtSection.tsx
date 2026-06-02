import SceneWrapper from "../../components/storytelling/SceneWrapper";
import NarrativeTitle from "../../components/storytelling/NarrativeTitle";
import GlowNode from "../../components/storytelling/GlowNode";

export default function ThoughtSection() {
  return (
    <SceneWrapper>
      <GlowNode />
      <NarrativeTitle text="A thought begins." />
    </SceneWrapper>
  );
}