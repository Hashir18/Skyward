// Sound effect utilities
class SoundManager {
  private sounds: Map<string, HTMLAudioElement> = new Map();
  private enabled: boolean = true;

  constructor() {
    // Create sound effects using Web Audio API for better performance
    this.initializeSounds();
  }

  private initializeSounds() {
    // We'll use data URIs for simple sound effects
    // These are short beep/click sounds
    const clickSound = this.createBeep(800, 0.1, 0.05);
    const hoverSound = this.createBeep(600, 0.05, 0.03);
    const successSound = this.createBeep(1000, 0.15, 0.1);
    
    this.sounds.set("click", clickSound);
    this.sounds.set("hover", hoverSound);
    this.sounds.set("success", successSound);
  }

  private createBeep(frequency: number, duration: number, volume: number): HTMLAudioElement {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = "sine";

    gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    const audio = new Audio();
    
    // Store the audio context for later use
    (audio as any).__oscillator = oscillator;
    (audio as any).__gainNode = gainNode;
    (audio as any).__context = audioContext;
    (audio as any).__duration = duration;

    return audio;
  }

  play(soundName: string) {
    if (!this.enabled) return;

    const sound = this.sounds.get(soundName);
    if (!sound) return;

    try {
      // Use Web Audio API to play
      const oscillator = (sound as any).__oscillator;
      const context = (sound as any).__context;
      const duration = (sound as any).__duration;

      if (oscillator && context) {
        const newOscillator = context.createOscillator();
        const newGainNode = context.createGain();
        
        newOscillator.connect(newGainNode);
        newGainNode.connect(context.destination);
        
        newOscillator.frequency.value = oscillator.frequency.value;
        newOscillator.type = oscillator.type;
        
        const now = context.currentTime;
        newGainNode.gain.setValueAtTime((sound as any).__gainNode.gain.value, now);
        newGainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);
        
        newOscillator.start(now);
        newOscillator.stop(now + duration);
      }
    } catch (error) {
      console.warn("Could not play sound:", error);
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  isEnabled() {
    return this.enabled;
  }
}

export const soundManager = new SoundManager();
