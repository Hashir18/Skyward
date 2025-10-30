import { useEffect, useState, useRef } from "react";
import { Pickaxe, Sword, Shield, Heart, Star, Gem } from "lucide-react";

interface ScrollElement {
  id: string;
  icon: React.ReactNode;
  position: number;
  color: string;
  side: "left" | "right";
}

export const ScrollElements = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const elementsRef = useRef<HTMLDivElement>(null);

  const elements: ScrollElement[] = [
    { id: "1", icon: <Pickaxe className="w-8 h-8" />, position: 15, color: "text-primary", side: "left" },
    { id: "2", icon: <Sword className="w-8 h-8" />, position: 25, color: "text-red-400", side: "right" },
    { id: "3", icon: <Shield className="w-8 h-8" />, position: 35, color: "text-success", side: "left" },
    { id: "4", icon: <Heart className="w-8 h-8" />, position: 45, color: "text-pink-400", side: "right" },
    { id: "5", icon: <Star className="w-8 h-8" />, position: 55, color: "text-accent", side: "left" },
    { id: "6", icon: <Gem className="w-8 h-8" />, position: 65, color: "text-cyan-400", side: "right" },
    { id: "7", icon: <Pickaxe className="w-8 h-8" />, position: 75, color: "text-primary", side: "left" },
    { id: "8", icon: <Sword className="w-8 h-8" />, position: 85, color: "text-red-400", side: "right" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      const newVisible = new Set(visibleElements);
      elements.forEach((element) => {
        if (scrollPercentage >= element.position - 10 && !visibleElements.has(element.id)) {
          newVisible.add(element.id);
        }
      });

      setVisibleElements(newVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleElements]);

  return (
    <div ref={elementsRef} className="fixed inset-0 pointer-events-none z-5">
      {elements.map((element) => {
        const isVisible = visibleElements.has(element.id);
        const sideClass = element.side === "left" ? "left-4" : "right-4";
        const animationClass = element.side === "left"
          ? "translate-x-[-100px] opacity-0"
          : "translate-x-[100px] opacity-0";

        return (
          <div
            key={element.id}
            className={`absolute ${sideClass} transition-all duration-700 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : animationClass
            }`}
            style={{ top: `${element.position}%` }}
          >
            <div className={`${element.color} transform hover:scale-125 transition-transform duration-300 animate-float`}
              style={{
                animationDelay: `${Math.random() * 2}s`,
                filter: "drop-shadow(0 0 10px currentColor)"
              }}
            >
              {element.icon}
            </div>
          </div>
        );
      })}
    </div>
  );
};