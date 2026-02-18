export default function HeroSlider() {
  const cards = [
    {
      title: "Solana Surge",
      subtitle: "Community votes rising fast",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040",
    },
    {
      title: "ETH Scaling Debate",
      subtitle: "Layer 2 battle intensifies",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
    },
    {
      title: "Bitcoin Momentum",
      subtitle: "Market sentiment shifting",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Community Rankings",
      subtitle: "Votes reshaping the leaderboard",
      image: "https://images.unsplash.com/photo-1621768216002-5ac171876625",
    },
  ];

  return (
    <div className="relative w-full mt-8 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#0B1220] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#0B1220] to-transparent z-20 pointer-events-none" />

      <div className="flex w-max gap-12 animate-marquee-left">
        {[...cards, ...cards].map((card, i) => (
          <ImageCard key={i} card={card} delay={i} />
        ))}
      </div>
    </div>
  );
}

function ImageCard({ card, delay }) {
  return (
    <div
      className="
      relative w-[420px] h-[260px]
      rounded-2xl overflow-hidden
      border border-white/10
      shadow-[0_20px_60px_rgba(0,0,0,0.45)]
      transition-all duration-500 ease-out
      hover:scale-[1.03]
      hover:shadow-[0_30px_80px_rgba(0,0,0,0.65)]
      animate-float
      group
    "
    >
      {" "}
      {/* Background Image */}
      <img
        src={`${card.image}?auto=format&fit=crop&w=900&q=80`}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-white text-xl font-bold mb-2">{card.title}</h3>
        <p className="text-slate-300 text-sm">{card.subtitle}</p>
      </div>
    </div>
  );
}
