import { useEffect, useState } from "react";
import { soundManager } from "@/utils/sounds";

interface Character {
  id: string;
  type: "steve" | "creeper" | "zombie" | "villager" | "dog";
  x: number;
  y: number;
  size: number;
}

export const MinecraftCharacters = () => {
  const [characters] = useState<Character[]>([
    { id: "1", type: "steve", x: 10, y: 20, size: 80 },
    { id: "2", type: "creeper", x: 85, y: 35, size: 70 },
    { id: "3", type: "zombie", x: 15, y: 55, size: 75 },
    { id: "4", type: "villager", x: 90, y: 70, size: 70 },
    { id: "5", type: "dog", x: 12, y: 85, size: 60 },
    { id: "6", type: "steve", x: 88, y: 15, size: 75 },
  ]);

  const renderCharacter = (char: Character) => {
    const colors = {
      steve: "linear-gradient(135deg, #4A90E2 0%, #2E5C8A 100%)",
      creeper: "linear-gradient(135deg, #22C55E 0%, #166534 100%)",
      zombie: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
      villager: "linear-gradient(135deg, #92400E 0%, #78350F 100%)",
      dog: "linear-gradient(135deg, #D4D4D4 0%, #737373 100%)",
    };

    return (
      <div
        key={char.id}
        className="absolute animate-float cursor-pointer hover:scale-110 transition-transform duration-300"
        style={{
          left: `${char.x}%`,
          top: `${char.y}%`,
          width: `${char.size}px`,
          height: `${char.size}px`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${4 + Math.random() * 2}s`,
        }}
        onClick={() => {
          soundManager.play("click");
        }}
        onMouseEnter={() => soundManager.play("hover")}
      >
        <div
          className="w-full h-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
          style={{
            background: colors[char.type],
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs opacity-0 hover:opacity-100 transition-opacity">
            {char.type.toUpperCase()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      <div className="relative w-full h-full pointer-events-auto">
        {characters.map(renderCharacter)}
      </div>
    </div>
  );
};