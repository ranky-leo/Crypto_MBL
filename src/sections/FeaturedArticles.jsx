export default function FeaturedArticles() {
  const articles = [
    {
      title: "Brave the Tide: How Coins Hit Top 10",
      excerpt:
        "Deep analysis of market cycles and the behavioral patterns driving token surges.",
      rating: "3.8/5",
      image:
        "https://images.unsplash.com/photo-1518544889280-9c9a21a1e36f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "The Community-Driven Rise of Solana",
      excerpt:
        "How decentralized sentiment and social intelligence shape price momentum.",
      rating: "3.5/5",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Why Sentimentally Charts the Future",
      excerpt:
        "Combining community signals with technical indicators for smarter forecasting.",
      rating: "3.1/5",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="pb-[110px]">
      <div className="max-w-[1700px] mx-auto px-6">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Top Community Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {articles.map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article }) {
  return (
    <div
      className="
        rounded-2xl
        overflow-hidden
        border border-white/10
        bg-slate-900/60
        shadow-lg
        transition-transform duration-300
        hover:scale-[1.01]
        will-change-transform
      "
    >
      {/* Image */}
      <div className="h-[220px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition duration-700 hover:scale-102"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white text-lg font-semibold mb-3">
          {article.title}
        </h3>

        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
          {article.excerpt}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-3 text-sm">
          <div className="flex text-yellow-400">★★★★☆</div>
          <span className="text-slate-400">{article.rating}</span>
        </div>
      </div>
    </div>
  );
}
