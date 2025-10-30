import { Navigation } from "@/components/Navigation";
import { StatsSection } from "@/components/sections/StatsSection";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";
import { SoundToggle } from "@/components/SoundToggle";
import { ScrollElements } from "@/components/ScrollElements";
import { FloatingBlocks } from "@/components/FloatingBlocks";

export default function Stats() {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <FloatingBlocks />
      <ScrollElements />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20">
          <StatsSection />
        </div>
      </div>
      <SoundToggle />
    </div>
  );
}
