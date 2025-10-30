import { Users, Map, Calendar, Flag, Trophy, Crown, Swords } from "lucide-react";

export const StatsSection = () => {
  const statsCards = [
    { label: "Total Players", value: "20+", color: "text-primary", icon: Users },
    { label: "Islands Created", value: "3+", color: "text-success", icon: Map },
    { label: "weekly Events", value: "3+", color: "text-purple-400", icon: Calendar },
    { label: "Active Factions", value: "10+", color: "text-red-400", icon: Flag },
  ];

  const leaderboard = [
    { rank: 1, name: "Bapu", level: 69, kills: 420, avatar: "🟧", color: "bg-accent" },
    { rank: 2, name: "BeingSxlman", level: 50, kills: 116, avatar: "⬜", color: "bg-card-glow" },
    { rank: 3, name: "Africanpookie", level: 45, kills: 83, avatar: "🟧", color: "bg-accent" },
    { rank: 4, name: "HashimPookie", level: 43, kills: 80, avatar: "⬜", color: "bg-card-glow" },
    { rank: 5, name: "KING-SUKUNA", level: 39, kills: 75, avatar: "🟧", color: "bg-accent" },
  ];

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Player <span className="text-primary">Stats</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Top legends of SkyWards SMP
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statsCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(var(--primary-glow)/0.2)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Leaderboard */}
        <div className="bg-card border border-border rounded-2xl p-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Trophy className="w-8 h-8 text-accent" />
            <h3 className="text-3xl font-bold">Top Players Leaderboard</h3>
          </div>

          <div className="space-y-4">
            {leaderboard.map((player, index) => (
              <div
                key={player.name}
                className="bg-secondary border border-border rounded-xl p-6 flex items-center gap-6 hover:border-primary/50 transition-all hover:shadow-[0_0_15px_hsl(var(--primary-glow)/0.2)] animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                {/* Rank Badge */}
                <div className={`${player.color} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <span className="text-2xl font-bold">#{player.rank}</span>
                </div>

                {/* Player Avatar */}
                <div className={`${player.color} w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <span className="text-2xl">{player.avatar}</span>
                </div>

                {/* Player Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xl font-bold">{player.name}</h4>
                    {player.rank === 1 && <Crown className="w-5 h-5 text-accent" />}
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-success">Lvl {player.level}</span>
                    <span className="text-red-400 flex items-center gap-1">
                      <Swords className="w-4 h-4" />
                      {player.kills}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="hidden md:block w-48">
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      style={{ width: `${Math.min((player.kills / 1500) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
