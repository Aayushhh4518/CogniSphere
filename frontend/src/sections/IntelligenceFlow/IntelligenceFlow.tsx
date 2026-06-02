import HumanNode from "../../components/intelligence/HumanNode";
import PromptNode from "../../components/intelligence/PromptNode";
import TokenStream from "../../components/intelligence/TokenStream";
import ModelCore from "../../components/intelligence/ModelCore";
import ResponseNode from "../../components/intelligence/ResponseNode";

export default function IntelligenceFlow() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#05070A",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <HumanNode />
      <PromptNode />
      <TokenStream />
      <ModelCore />
      <ResponseNode />
    </section>
  );
}