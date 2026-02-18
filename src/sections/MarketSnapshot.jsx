import Sparkline from "../components/Sparkline";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MarketSnapshot() {
  const initialCoins = [
    { symbol: "BTC", name: "Bitcoin", base: 3984586 },
    { symbol: "ETH", name: "Ethereum", base: 115575 },
    { symbol: "XRP", name: "XRP", base: 86 },
    { symbol: "SOL", name: "Solana", base: 4978 },
    { symbol: "USDT", name: "Tether", base: 57 },
  ];

  const navigate = useNavigate();

  const [favorites, setFavorites] = useState([]);

  const [coins, setCoins] = useState(
    initialCoins.map((c) => ({
      ...c,
      price: c.base,
      history: Array(20).fill(c.base),
      changePercent: 0,
    })),
  );

  const [sortConfig, setSortConfig] = useState({
    key: "rank",
    direction: "asc",
  });

  const sortedCoins = [...coins].sort((a, b) => {
    if (sortConfig.key === "price") {
      return sortConfig.direction === "asc"
        ? a.price - b.price
        : b.price - a.price;
    }

    if (sortConfig.key === "24h") {
      return sortConfig.direction === "asc"
        ? a.changePercent - b.changePercent
        : b.changePercent - a.changePercent;
    }

    return 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins((prev) =>
        prev.map((coin) => {
          const change = (Math.random() - 0.5) * coin.price * 0.002;
          const newPrice = coin.price + change;

          const newHistory = [...coin.history.slice(1), newPrice];

          return {
            ...coin,
            price: newPrice,
            history: newHistory,
            changePercent: ((change / coin.price) * 100).toFixed(2),
          };
        }),
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="pt-[40px] pb-[80px]">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Market Snapshot
        </h2>

        <div className="rounded-xl border border-white/10 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="text-slate-400 text-xs uppercase tracking-wide border-b border-white/10 sticky top-0 bg-[#0b1220] z-10">
              <tr>
                <th className="px-4 py-4"></th>
                <th className="px-4 py-4 text-left">#</th>
                <th className="px-6 py-4 text-left">Name</th>

                <th
                  className="px-6 py-4 text-left cursor-pointer"
                  onClick={() =>
                    setSortConfig({
                      key: "price",
                      direction:
                        sortConfig.key === "price" &&
                        sortConfig.direction === "asc"
                          ? "desc"
                          : "asc",
                    })
                  }
                >
                  Price
                </th>

                <th className="px-6 py-4 text-left">1h %</th>
                <th className="px-6 py-4 text-left">24h %</th>
                <th className="px-6 py-4 text-left">7d %</th>
                <th className="px-6 py-4 text-left">Last 7 Days</th>
              </tr>
            </thead>

            <tbody>
              {sortedCoins.map((coin, i) => {
                const change1h = (Math.random() * 2 - 1).toFixed(2);
                const change24h = coin.changePercent;
                const change7d = (Math.random() * 8 - 4).toFixed(2);

                const pos1h = change1h >= 0;
                const pos24h = change24h >= 0;
                const pos7d = change7d >= 0;

                return (
                  <tr
                    key={i}
                    className="border-b border-white/5 hover:bg-white/[0.03] transition"
                  >
                    {/* Star */}
                    <td
                      className="px-4 py-5 text-lg cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFavorites((prev) =>
                          prev.includes(coin.symbol)
                            ? prev.filter((s) => s !== coin.symbol)
                            : [...prev, coin.symbol],
                        );
                      }}
                    >
                      {favorites.includes(coin.symbol) ? "★" : "☆"}
                    </td>
                    {/* Rank */}
                    <td className="px-4 py-5 text-slate-400">{i + 1}</td>

                    {/* Name */}
                    <td className="px-6 py-5 flex items-center gap-4">
                      <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-white">
                        {coin.symbol}
                      </div>

                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-medium">
                            {coin.name}
                          </span>

                          <span className="text-slate-400 text-xs">
                            {coin.symbol}
                          </span>

                          <span className="text-[10px] px-2 py-[2px] rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                            Buy
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="px-6 py-5 text-slate-200 font-medium">
                      $
                      {coin.price.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </td>

                    {/* 1h */}
                    <td
                      className={`px-6 py-5 font-medium ${pos1h ? "text-green-400" : "text-red-400"}`}
                    >
                      {pos1h ? "▲ +" : "▼ "}
                      {Math.abs(change1h)}%
                    </td>

                    {/* 24h */}
                    <td
                      className={`px-6 py-5 font-medium ${pos24h ? "text-green-400" : "text-red-400"}`}
                    >
                      {pos24h ? "▲ +" : "▼ "}
                      {Math.abs(change24h)}%
                    </td>

                    {/* 7d */}
                    <td
                      className={`px-6 py-5 font-medium ${pos7d ? "text-green-400" : "text-red-400"}`}
                    >
                      {pos7d ? "▲ +" : "▼ "}
                      {Math.abs(change7d)}%
                    </td>

                    {/* Chart */}
                    <td className="px-6 py-5">
                      <Sparkline data={coin.history} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
