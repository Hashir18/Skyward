import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sword, Newspaper, BarChart3, Zap, ShoppingBag } from "lucide-react";
import { soundManager } from "@/utils/sounds";

export const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { label: "About", path: "/about", icon: Sword },
    { label: "Stats", path: "/stats", icon: BarChart3 },
    { label: "Store", path: "/store", icon: ShoppingBag },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(var(--primary-glow))] transition-all">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">
              Sky<span className="text-primary">Ward</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onMouseEnter={() => soundManager.play("hover")}
                  onClick={() => soundManager.play("click")}
                  className={`flex items-center gap-2 text-sm font-medium transition-all hover:text-primary hover:scale-110 ${
                    isActive(item.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Button 
            size="lg" 
            onMouseEnter={() => soundManager.play("hover")}
            onClick={() => soundManager.play("success")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(var(--primary-glow)/0.5)] hover:shadow-[0_0_30px_hsl(var(--primary-glow))] transition-all hover:scale-105"
          >
            Join Server
          </Button>
        </div>
      </div>
    </nav>
  );
};
