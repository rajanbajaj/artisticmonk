import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Animated = ({
  children,
}: Readonly<{
      children: React.ReactNode;
    }>) => {
  useEffect(() => {
    // Ensure GSAP plugins are registered only once
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);
    
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".your-element",
        { x: 0 },
        {
          x: -10,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
        }
      );
    });
    return () => ctx.revert();
  }, []);
    
  return (
    <div className="your-element">
      {children}
    </div>
  );
}

export default Animated