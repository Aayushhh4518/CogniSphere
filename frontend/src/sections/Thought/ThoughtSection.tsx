export default function ThoughtSection() {
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
          fontSize: "2rem",
          marginBottom: "2rem",
          color: "#F8FAFC",
        }}
      >
        ✦
      </div>

      <h2
        style={{
          fontSize: "clamp(2rem,5vw,4rem)",
          textAlign: "center",
        }}
      >
        A thought begins.
      </h2>
    </section>
  );
}