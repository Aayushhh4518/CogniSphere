import { useEffect, useRef, useState } from "react";
import gsap from "../../lib/gsap";

const scenes = [
  "Everything begins with a human.",
  "A thought begins.",
  "Curiosity becomes a question.",
  "Questions become prompts.",
];

export default function NarrativeEngine() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    const scrollTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress < 0.25) {
            setSceneIndex(0);
          } else if (progress < 0.5) {
            setSceneIndex(1);
          } else if (progress < 0.75) {
            setSceneIndex(2);
          } else {
            setSceneIndex(3);
          }
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