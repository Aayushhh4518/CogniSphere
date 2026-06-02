type NarrativeTitleProps = {
  text: string;
};

export default function NarrativeTitle({ text }: NarrativeTitleProps) {
  return (
    <h2
      style={{
        color: "white",
        textAlign: "center",
        fontWeight: 500,
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
        maxWidth: "1000px",
        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
      }}
    >
      {text}
    </h2>
  );
}