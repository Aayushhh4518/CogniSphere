import { useEffect, useRef, useState } from "react";
import gsap from "../../lib/gsap";

const scenes = [
  "Everything begins with a human.",
  "A thought begins.",
  "Curiosity becomes a question.",
  "Questions become prompts.",
  "Prompts become tokens.",
  "Tokens enter an AI model.",
  "The model generates intelligence.",
  "A response is created.",
];

export default function NarrativeEngine() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    const scrollTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=6000",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;

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
      style={{
        height: "400vh",
        background: "#05070A",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <h2
          style={{
            color: "white",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            textAlign: "center",
            maxWidth: "1000px",
            lineHeight: 1.2,
          }}
        >
          {scenes[sceneIndex]}
        </h2>
      </div>
    </section>
  );
}