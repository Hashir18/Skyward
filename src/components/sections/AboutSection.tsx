import { Swords, Users, Heart, Crown, Shield, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const AboutSection = () => {
  const features = [
    {
      icon: Swords,
      title: "Epic PvP",
      description: "Battle in custom arenas with unique combat mechanics",
      color: "text-red-400",
      bgColor: "bg-red-500/10",
    },
    {
      icon: Users,
      title: "Active Community",
      description: "Join 20+ friendly players from around the world",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Heart,
      title: "Custom Content",
      description: "Unique items, quests, and sky-themed gameplay",
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
    },
    {
      icon: Crown,
      title: "Progression System",
      description: "Unlock ranks, skills, and exclusive perks",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Shield,
      title: "Protected Builds",
      description: "Your creations are 100% safe with land claims",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: Zap,
      title: "Regular Events",
      description: "Competitions, giveaways, and special challenges",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-primary">SkyWards</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience Minecraft like never before in our premium survival multiplayer server
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.title} direction="up" delay={index * 100}>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(var(--primary-glow)/0.2)] hover:scale-105 cursor-pointer">
                  <div className={`${feature.bgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-transform hover:rotate-12`}>
                    <Icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Story Section */}
        <ScrollReveal direction="fade">
          <div className="bg-gradient-to-br from-card via-card to-card-glow border border-border rounded-2xl p-12 text-center hover:shadow-[0_0_40px_hsl(var(--primary-glow)/0.3)] transition-all">
            <h3 className="text-4xl font-bold mb-6">
              The <span className="text-primary">Legend</span> Begins
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Long ago, ancient builders discovered floating islands in the sky, rich with resources and
              mysteries. Now, brave adventurers gather to claim their place among the clouds, building
              legendary kingdoms, forming powerful alliances, and writing their own stories in the
              endless expanse above. Will you rise to become a Sky Legend, or fade into the mists below?
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
