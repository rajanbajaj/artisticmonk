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
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".your-element",
        snap: {
          snapTo: "labels",
          duration: { min: 0.2, max: 3 },
          delay: 0.2,
          ease: "power1.inOut"
        }
      }
    });
      
    tl.to(".your-element", { x: -10, duration: 0.5 })
      .to(".your-element", { x: 0, duration: 1 });
  }, []);
    
  return (
    <div className="your-element">
      {children}
    </div>
  );
}

export default Animated