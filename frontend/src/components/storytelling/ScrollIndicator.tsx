import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ScrollIndicator() {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!indicatorRef.current) return;

    gsap.to(indicatorRef.current, {
      y: "100%",
      opacity: 0,
      duration: 1.5,
      repeat: -1,
      ease: "power2.out",
    });
  });

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-50">
      <span className="text-xs text-blue-400 uppercase tracking-widest font-mono">Scroll</span>
      <div className="w-[1px] h-12 bg-blue-900/50 overflow-hidden relative">
        <div ref={indicatorRef} className="absolute top-0 w-full h-1/2 bg-blue-400" />
      </div>
    </div>
  );
}
