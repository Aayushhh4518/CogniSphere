import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SceneWrapperProps = {
  children: React.ReactNode;
};

export default function SceneWrapper({ children }: SceneWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        scrub: true,
        pin: true,
      },
    });

    tl.fromTo(
      contentRef.current,
      { opacity: 0, transform: "scale(0.9)" },
      { opacity: 1, transform: "scale(1)", duration: 0.3, ease: "power2.out" }
    ).to(
      contentRef.current,
      { opacity: 0, transform: "scale(1.1)", duration: 0.3, ease: "power2.in" },
      "+=0.4"
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        zIndex: 10,
      }}
    >
      <div
        ref={contentRef}
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          width: "100%",
          padding: "0 1rem",
          opacity: 0,
        }}
      >
        {children}
      </div>
    </section>
  );
}