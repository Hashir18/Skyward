import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Users, Package, Zap } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { soundManager } from "@/utils/sounds";
import { useParallax } from "@/hooks/useScrollAnimation";

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const serverIP = "ad2.lordcloud.ovh:25584";
  const parallaxOffset = useParallax(0.3);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    soundManager.play("success");
    toast.success("Server IP copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { icon: Users, label: "Players", value: "20+", color: "text-primary" },
    { icon: Package, label: "Version", value: "1.21.8", color: "text-accent" },
    { icon: Zap, label: "Uptime", value: "99.9%", color: "text-success" },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-20 h-20 bg-primary/5 rounded-lg animate-float hover:bg-primary/10 transition-colors cursor-pointer"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Beacon Icon */}
        <div className="mb-8 flex justify-center animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-accent blur-3xl opacity-50 animate-pulse-glow" />
            <div className="relative w-32 h-32 bg-gradient-to-br from-card-glow to-card border-2 border-accent/30 rounded-2xl flex items-center justify-center">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-2 bg-accent rounded-full shadow-[0_0_20px_hsl(var(--accent-glow))]" />
              <Zap className="w-16 h-16 text-accent drop-shadow-[0_0_15px_hsl(var(--accent-glow))]" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                <Badge className="bg-success text-success-foreground shadow-[0_0_10px_hsl(var(--success))] px-4 py-1">
                  ● ONLINE
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-7xl md:text-8xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Sky<span className="text-accent">Ward</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Minecraft SMP Server
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-6 min-w-[160px] hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(var(--primary-glow)/0.3)]"
              >
                <Icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button
            size="lg"
            onMouseEnter={() => soundManager.play("hover")}
            onClick={() => soundManager.play("success")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-[0_0_30px_hsl(var(--accent-glow)/0.5)] hover:shadow-[0_0_40px_hsl(var(--accent-glow))] transition-all hover:scale-110"
          >
            <Zap className="w-5 h-5 mr-2" />
            Join Now
          </Button>

          <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-6 py-3 hover:border-primary/50 transition-colors">
            <div className="text-sm text-muted-foreground mr-2">Server IP</div>
            <code className="text-primary font-mono">{serverIP}</code>
            <Button
              variant="ghost"
              size="icon"
              onClick={copyToClipboard}
              className="h-8 w-8 hover:bg-primary/10"
            >
              <Copy className={`w-4 h-4 ${copied ? "text-success" : "text-muted-foreground"}`} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
