import SceneWrapper from "../../Components/storytelling/SceneWrapper";
import NarrativeTitle from "../../Components/storytelling/NarrativeTitle";

export default function NarrativeFlow() {
  return (
    <>
      <SceneWrapper>
        <NarrativeTitle text="Everything begins with a human." />
      </SceneWrapper>

      <SceneWrapper>
        <NarrativeTitle text="A thought begins." />
      </SceneWrapper>

      <SceneWrapper>
        <NarrativeTitle text="Curiosity becomes a question." />
      </SceneWrapper>

      <SceneWrapper>
        <NarrativeTitle text="Questions become prompts." />
      </SceneWrapper>
    </>
  );
}