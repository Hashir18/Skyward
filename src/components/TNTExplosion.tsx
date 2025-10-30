import { useState } from "react";
import { soundManager } from "@/utils/sounds";

interface TNTProps {
  x: number;
  y: number;
  id: string;
}

export const TNTExplosion = ({ x, y, id }: TNTProps) => {
  const [isExploding, setIsExploding] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = () => {
    if (isExploding) return;

    soundManager.play("success");
    setIsExploding(true);

    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    }));
    setParticles(newParticles);

    setTimeout(() => {
      setIsExploding(false);
      setParticles([]);
    }, 1000);
  };

  return (
    <div
      className="absolute cursor-pointer"
      style={{ left: `${x}%`, top: `${y}%` }}
      onClick={handleClick}
    >
      <div
        className={`relative w-16 h-16 transition-all duration-300 ${
          isExploding ? "scale-150 opacity-0" : "scale-100 opacity-100 hover:scale-110"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-lg shadow-lg">
          <div className="absolute inset-2 bg-gradient-to-br from-red-500 to-red-700 rounded">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">TNT</span>
            </div>
          </div>
        </div>
        {!isExploding && (
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-4 bg-gray-800 rounded-t animate-pulse" />
        )}
      </div>

      {isExploding && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-3 h-3 bg-orange-500 rounded-full animate-ping"
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                animationDuration: "0.5s",
              }}
            />
          ))}
          <div className="absolute inset-0 -m-20 bg-orange-500 rounded-full opacity-50 animate-ping" />
          <div className="absolute inset-0 -m-10 bg-red-500 rounded-full opacity-75 animate-ping" />
        </div>
      )}
    </div>
  );
};

export const TNTElements = () => {
  const tnts = [
    { id: "tnt1", x: 20, y: 25 },
    { id: "tnt2", x: 75, y: 45 },
    { id: "tnt3", x: 30, y: 65 },
    { id: "tnt4", x: 80, y: 80 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <div className="relative w-full h-full">
        {tnts.map((tnt) => (
          <div key={tnt.id} className="pointer-events-auto">
            <TNTExplosion {...tnt} />
          </div>
        ))}
      </div>
    </div>
  );
};