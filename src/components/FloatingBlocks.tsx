import { useEffect, useState } from "react";

interface Block {
  id: number;
  x: number;
  y: number;
  size: number;
  type: "grass" | "dirt" | "stone" | "diamond" | "gold";
  rotation: number;
}

export const FloatingBlocks = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    const types: Block["type"][] = ["grass", "dirt", "stone", "diamond", "gold"];
    const newBlocks: Block[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 30,
      type: types[Math.floor(Math.random() * types.length)],
      rotation: Math.random() * 360,
    }));
    setBlocks(newBlocks);
  }, []);

  const getBlockColor = (type: Block["type"]) => {
    switch (type) {
      case "grass":
        return "linear-gradient(135deg, #22C55E 0%, #16A34A 50%, #15803D 100%)";
      case "dirt":
        return "linear-gradient(135deg, #92400E 0%, #78350F 100%)";
      case "stone":
        return "linear-gradient(135deg, #71717A 0%, #52525B 100%)";
      case "diamond":
        return "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)";
      case "gold":
        return "linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {blocks.map((block) => (
        <div
          key={block.id}
          className="absolute animate-float cursor-pointer hover:scale-110 transition-transform"
          style={{
            left: `${block.x}%`,
            top: `${block.y}%`,
            width: `${block.size}px`,
            height: `${block.size}px`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${5 + Math.random() * 3}s`,
            transform: `rotate(${block.rotation}deg)`,
          }}
        >
          <div
            className="w-full h-full rounded shadow-lg"
            style={{
              background: getBlockColor(block.type),
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            }}
          >
            <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-0.5 p-1 opacity-30">
              <div className="bg-black/20 rounded-sm"></div>
              <div className="bg-white/20 rounded-sm"></div>
              <div className="bg-white/20 rounded-sm"></div>
              <div className="bg-black/20 rounded-sm"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};