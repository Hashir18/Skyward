import { Navigation } from "@/components/Navigation";
import { StoreSection } from "@/components/sections/StoreSection";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";
import { SoundToggle } from "@/components/SoundToggle";
import { TNTElements } from "@/components/TNTExplosion";
import { FloatingBlocks } from "@/components/FloatingBlocks";

export default function Store() {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <FloatingBlocks />
      <TNTElements />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20">
          <StoreSection />
        </div>
      </div>
      <SoundToggle />
    </div>
  );
}
