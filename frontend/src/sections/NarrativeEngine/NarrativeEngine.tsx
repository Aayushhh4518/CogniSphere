import { useEffect, useRef, useState } from "react";
import gsap from "../../lib/gsap";
import { useNarrativeStore } from "../../store/useNarrativeStore";

const scenes = [
  { title: "Human", description: "Everything begins with a human." },
  { title: "Thought", description: "A thought begins." },
  { title: "Question", description: "Curiosity becomes a question." },
  { title: "Prompt", description: "Questions become prompts." },
  { title: "Tokens", description: "Prompts become tokens." },
  { title: "Model", description: "Tokens enter an AI model." },
  { title: "Response", description: "A response is created." },
];

export default function NarrativeEngine() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    const scrollTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=10000",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          
          useNarrativeStore.getState().setProgress(progress);

          const index = Math.min(
            Math.floor(progress * scenes.length),
            scenes.length - 1
          );

          setSceneIndex(index);
        },
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full"
      style={{
        height: "1000vh",
        background: "transparent",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            color: "#3B82F6",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            fontWeight: 600,
          }}
        >
          {scenes[sceneIndex].title}
        </span>
        <h2
          style={{
            color: "white",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            textAlign: "center",
            maxWidth: "1000px",
            lineHeight: 1.2,
          }}
        >
          {scenes[sceneIndex].description}
        </h2>
      </div>
    </section>
  );
}