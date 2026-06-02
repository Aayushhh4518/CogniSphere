import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function GlowNode() {
  const nodeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!nodeRef.current) return;

    gsap.to(nodeRef.current, {
      scale: 1.5,
      opacity: 0.7,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <div
      ref={nodeRef}
      style={{
        width: "1rem",
        height: "1rem",
        borderRadius: "50%",
        backgroundColor: "#3B82F6",
        boxShadow: "0 0 30px 8px rgba(59, 130, 246, 0.6)",
      }}
    />
  );
}