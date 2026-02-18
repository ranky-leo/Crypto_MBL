export default function FeatureCards() {
  const features = [
    {
      title: "Discover the Top 10 Coins of the Week",
      button: "Learn More",
      image:
        "https://images.unsplash.com/photo-1518544889280-9c9a21a1e36f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Join the CoinBattle Community Today",
      button: "Get Started",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Crypto Trends & Insights Stay Updated",
      button: "Learn More",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="pt-[110px] pb-[40px]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <FeatureCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ item }) {
  return (
    <div
      className="
      relative h-[240px]
      rounded-2xl overflow-hidden
      border border-white/10
      shadow-[0_20px_60px_rgba(0,0,0,0.45)]
      group
    "
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h3 className="text-white text-xl font-semibold mb-6 leading-snug">
          {item.title}
        </h3>

        <button className="px-6 py-3 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-200 transition">
          {item.button}
        </button>
      </div>
    </div>
  );
}
