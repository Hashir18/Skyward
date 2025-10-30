import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { soundManager } from "@/utils/sounds";

export const SoundToggle = () => {
  const [enabled, setEnabled] = useState(soundManager.isEnabled());

  const toggle = () => {
    const newState = soundManager.toggle();
    setEnabled(newState);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 bg-card/80 backdrop-blur-sm border border-border hover:bg-card shadow-lg"
      aria-label="Toggle sound effects"
    >
      {enabled ? (
        <Volume2 className="w-5 h-5 text-primary" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      )}
    </Button>
  );
};
