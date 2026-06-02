export default function HeroSection() {
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
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <p
        style={{
          color: "#64748B",
          letterSpacing: "0.4em",
          marginBottom: "1rem",
          fontSize: "0.8rem",
        }}
      >
        COGNISPHERE
      </p>

      <h1
        style={{
          fontSize: "clamp(3rem, 8vw, 7rem)",
          fontWeight: 700,
          maxWidth: "1200px",
          lineHeight: 1.1,
        }}
      >
        The Living Intelligence Economy
      </h1>

      <p
        style={{
          marginTop: "2rem",
          color: "#94A3B8",
          fontSize: "1.2rem",
          maxWidth: "700px",
        }}
      >
        Understand. Explore. Use. Track. Intelligence.
      </p>

      <div
        style={{
          marginTop: "5rem",
          color: "#64748B",
        }}
      >
        ↓ Scroll To Begin
      </div>
    </section>
  );
}