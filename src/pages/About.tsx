import { Navigation } from "@/components/Navigation";
import { AboutSection } from "@/components/sections/AboutSection";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";
import { SoundToggle } from "@/components/SoundToggle";
import { MinecraftCharacters } from "@/components/MinecraftCharacters";
import { FloatingBlocks } from "@/components/FloatingBlocks";

export default function About() {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <FloatingBlocks />
      <MinecraftCharacters />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20">
          <AboutSection />
        </div>
      </div>
      <SoundToggle />
    </div>
  );
}
