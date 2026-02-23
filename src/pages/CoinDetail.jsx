import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ChartSection from "./ChartSection";

export default function CoinDetail() {
  const { symbol } = useParams();

  const [price, setPrice] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice((p) => p + (Math.random() - 0.5) * 10);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-[100px] pb-[100px]">
      <div className="max-w-[1500px] mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">{symbol}</h1>
          <div className="text-2xl text-slate-300 mt-2">
            ${price.toFixed(2)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Chart Area */}
          <div className="md:col-span-2">
            <ChartSection data={chartData} />
          </div>

          {/* Stats Panel */}
          <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6">
            <h3 className="text-white mb-4">Key Stats</h3>

            <div className="space-y-3 text-slate-300 text-sm">
              <div>Market Sentiment: Bullish</div>
              <div>Community Rank: #1</div>
              <div>Active Discussions: 1,204</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
