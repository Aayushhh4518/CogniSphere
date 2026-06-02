export default function HumanSection() {
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
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          background: "#3B82F6",
          boxShadow: "0 0 40px #3B82F6",
          marginBottom: "3rem",
        }}
      />

      <h2
        style={{
          fontSize: "clamp(2rem,5vw,4rem)",
          textAlign: "center",
        }}
      >
        Everything begins with a human.
      </h2>
    </section>
  );
}