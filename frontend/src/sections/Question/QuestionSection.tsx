export default function QuestionSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#05070A",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "3rem",
          marginBottom: "2rem",
          color: "#3B82F6",
        }}
      >
        ?
      </div>

      <h2
        style={{
          fontSize: "clamp(2rem,5vw,4rem)",
          textAlign: "center",
        }}
      >
        Curiosity becomes a question.
      </h2>
    </section>
  );
}