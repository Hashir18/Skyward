import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { StoreSection } from "@/components/sections/StoreSection";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";
import { SoundToggle } from "@/components/SoundToggle";
import { MinecraftCharacters } from "@/components/MinecraftCharacters";
import { TNTElements } from "@/components/TNTExplosion";
import { ScrollElements } from "@/components/ScrollElements";
import { FloatingBlocks } from "@/components/FloatingBlocks";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <FloatingBlocks />
      <MinecraftCharacters />
      <TNTElements />
      <ScrollElements />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <AboutSection />
        <StatsSection />
        <StoreSection />
      </div>
      <SoundToggle />
    </div>
  );
}
