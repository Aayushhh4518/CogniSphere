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
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {children}
    </section>
  );
}