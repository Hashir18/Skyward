import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  className?: string;
}

export const ScrollReveal = ({ 
  children, 
  direction = "up", 
  delay = 0,
  className = "" 
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getTransform = () => {
    if (isVisible) return "translate(0, 0)";
    
    switch (direction) {
      case "up":
        return "translate(0, 50px)";
      case "down":
        return "translate(0, -50px)";
      case "left":
        return "translate(50px, 0)";
      case "right":
        return "translate(-50px, 0)";
      default:
        return "translate(0, 0)";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
