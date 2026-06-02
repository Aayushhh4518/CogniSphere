type SceneWrapperProps = {
  children: React.ReactNode;
};

export default function SceneWrapper({
  children,
}: SceneWrapperProps) {
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
      {children}
    </section>
  );
}