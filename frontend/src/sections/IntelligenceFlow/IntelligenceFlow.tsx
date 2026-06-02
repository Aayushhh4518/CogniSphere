import SceneWrapper from "../../components/storytelling/SceneWrapper";
import HumanNode from "../../components/intelligence/HumanNode";
import PromptNode from "../../components/intelligence/PromptNode";
import TokenStream from "../../components/intelligence/TokenStream";
import ModelCore from "../../components/intelligence/ModelCore";
import ResponseNode from "../../components/intelligence/ResponseNode";

export default function IntelligenceFlow() {
  return (
    <SceneWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <HumanNode />
        <PromptNode />
        <TokenStream />
        <ModelCore />
        <ResponseNode />
      </div>
    </SceneWrapper>
  );
}