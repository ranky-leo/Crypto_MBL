export default function CommunityPulse() {
  const items = [
    {
      tag: "Most Discussed",
      title: "Solana vs Ethereum",
      subtitle: "Scaling debate gaining momentum",
      metric: "1.8K discussions",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      tag: "Top Insight",
      title: "Bitcoin Supply Shock",
      subtitle: "Community analysis on scarcity trends",
      metric: "+742 votes",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1200&q=80",
    },
    {
      tag: "Rising Topic",
      title: "Layer 2 Wars",
      subtitle: "Optimism vs Arbitrum narrative shift",
      metric: "Trending 24h",
      image:
        "https://images.unsplash.com/photo-1621768216002-5ac171876625?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="relative py-[120px]">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Community Pulse
          </h2>
          <p className="text-slate-400 max-w-xl">
            Insights and discussions shaping today’s crypto intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <PulseCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PulseCard({ item }) {
  return (
    <div
      className="
      relative h-[320px]
      rounded-2xl overflow-hidden
      border border-white/10
      shadow-[0_20px_60px_rgba(0,0,0,0.45)]
      transition-all duration-500 ease-out
      hover:scale-[1.02]
      hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]
      group
    "
    >
      {/* Background Image */}
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6">
        <span className="text-cyan-400 text-xs tracking-widest uppercase">
          {item.tag}
        </span>

        <h3 className="text-white text-xl font-bold mt-2 mb-2">{item.title}</h3>

        <p className="text-slate-300 text-sm mb-3">{item.subtitle}</p>

        <span className="text-slate-400 text-xs">{item.metric}</span>
      </div>
    </div>
  );
}
