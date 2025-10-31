import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Key, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { soundManager } from "@/utils/sounds";
import { ScrollReveal } from "@/components/ScrollReveal";

export const StoreSection = () => {
  const ranks = [
    {
      name: "Starter Rank",
      price: "$2.99",
      color: "bg-rank-starter",
      borderColor: "border-rank-starter/50",
      glowColor: "hover:shadow-[0_0_30px_hsl(var(--rank-starter)/0.3)]",
      icon: "🟢",
      popular: false,
      stripeUrl: "https://wa.me/971547124398",
      features: ["+2 Homes ", "Priority Join", "Basic Kits", "$35000", "Custom Tag"],
    },
    {
      name: "Premium Rank",
      price: "$5.99",
      color: "bg-rank-premium",
      borderColor: "border-rank-premium/50",
      glowColor: "hover:shadow-[0_0_30px_hsl(var(--rank-premium)/0.3)]",
      icon: "🔵",
      popular: true,
      stripeUrl: "https://wa.me/971547124398",
      features: [
        "+5 Homes",
        "Premium kits",
        "Custom Tag",
        "85k",
      ],
    },
    {
      name: "Elite Rank",
      price: "$9.99",
      color: "bg-rank-elite",
      borderColor: "border-rank-elite/50",
      glowColor: "hover:shadow-[0_0_30px_hsl(var(--rank-elite)/0.3)]",
      icon: "🟣",
      popular: false,
      stripeUrl: "https://wa.me/971547124398",
      features: [
        "+10 Homes",
        "Elite kits",
        "+walking speed",
        "Pet access",
        "Custom Tag"
      ],
    },
    {
      name: "Legend Rank",
      price: "$14.99",
      color: "bg-rank-legend",
      borderColor: "border-rank-legend/50",
      glowColor: "hover:shadow-[0_0_30px_hsl(var(--rank-legend)/0.3)]",
      icon: "🟠",
      popular: false,
      stripeUrl: "https://wa.me/971547124398",
      features: [
        "Unlimited homes",
        "Legendry relic chest",
        "Legendary kits",
        "$450k",
        "Custom Tag",
      ],
    },
  ];

  const handlePurchase = (rankName: string, stripeUrl: string) => {
    soundManager.play("success");
    toast({
      title: "Opening checkout...",
      description: `Redirecting to Stripe for ${rankName}`,
    });
    setTimeout(() => {
      window.open(stripeUrl, "_blank");
    }, 1000); // small delay for effect
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-primary">Memberships</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Support the server & unlock exclusive perks
          </p>
        </div>

        {/* Ranks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ranks.map((rank, index) => (
            <ScrollReveal key={rank.name} direction="up" delay={index * 100}>
              <div
                className={`relative bg-card border-2 ${rank.borderColor} rounded-2xl p-6 transition-all ${rank.glowColor} hover:scale-105 cursor-pointer group`}
                onMouseEnter={() => soundManager.play("hover")}
              >
                {/* Popular Badge */}
                {rank.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 shadow-[0_0_15px_hsl(var(--primary-glow))]">
                      POPULAR
                    </Badge>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`${rank.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-transform group-hover:rotate-12 group-hover:scale-110`}
                >
                  <span className="text-4xl">{rank.icon}</span>
                </div>

                {/* Rank Name */}
                <h3 className="text-2xl font-bold text-center mb-2">
                  {rank.name}
                </h3>

                {/* Price */}
                <div
                  className={`text-4xl font-bold text-center mb-6 ${rank.color.replace(
                    "bg-",
                    "text-"
                  )}`}
                >
                  {rank.price}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {rank.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Key
                        className={`w-4 h-4 ${rank.color.replace(
                          "bg-",
                          "text-"
                        )} flex-shrink-0`}
                      />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Purchase Button */}
                <Button
                  onClick={() => handlePurchase(rank.name, rank.stripeUrl)}
                  className={`w-full ${rank.color} text-foreground hover:opacity-90 transition-all shadow-lg`}
                  size="lg"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Purchase
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Info Banner */}
        <div
          className="bg-gradient-to-r from-card via-card-glow to-card border border-border rounded-2xl p-8 text-center animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">
            All purchases support server development
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your support helps us maintain high-quality servers, add new
            features, and keep the community thriving. Thank you for being a
            legend!
          </p>
        </div>
      </div>
    </section>
  );
};
