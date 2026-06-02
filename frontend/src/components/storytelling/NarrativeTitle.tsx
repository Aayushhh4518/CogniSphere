type NarrativeTitleProps = {
  text: string;
};

export default function NarrativeTitle({
  text,
}: NarrativeTitleProps) {
  return (
    <h2
      style={{
        fontSize: "clamp(2rem,5vw,4rem)",
        textAlign: "center",
      }}
    >
      {text}
    </h2>
  );
}