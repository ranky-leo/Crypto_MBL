import Sparkline from "../components/Sparkline";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MarketSnapshot() {
  const initialCoins = [];

  const navigate = useNavigate();

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const [favorites, setFavorites] = useState([]);

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
        ? a.change24h - b.change24h
        : b.change24h - a.change24h;
    }

    return 0;
  });

  useEffect(() => {
    if (!coins.length) return;

    const sockets = [];

    coins.forEach((coin) => {
      const symbol = coin.symbol.toLowerCase() + "usdt";

      const ws = new WebSocket(
        `wss://stream.binance.com:9443/ws/${symbol}@ticker`,
      );

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);

        const livePrice = parseFloat(data.c);
        const live24h = parseFloat(data.P);

        setCoins((prev) =>
          prev.map((c) => {
            if (c.symbol !== coin.symbol) return c;

            const newHistory = [...c.history.slice(1), livePrice];

            const firstPrice = newHistory[0] || livePrice;
            const lastPrice = livePrice;

            const simulated1h = ((lastPrice - firstPrice) / firstPrice) * 100;

            const simulated7d = ((lastPrice - c.basePrice) / c.basePrice) * 100;

            return {
              ...c,
              price: livePrice,
              history: newHistory,
              change24h: live24h,
              change1h: simulated1h,
              change7d: simulated7d,
            };
          }),
        );
      };

      sockets.push(ws);
    });

    return () => sockets.forEach((ws) => ws.close());
  }, [coins.length]);

  useEffect(() => {
    const fetchMarket = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h,24h,7d",
        );

        const data = await response.json();

        const formatted = data.map((coin) => ({
          id: coin.id,
          symbol: coin.symbol.toUpperCase(),
          name: coin.name,
          price: coin.current_price,
          basePrice: coin.current_price,
          history: coin.sparkline_in_7d?.price?.slice(-20) || [],
          change1h: coin.price_change_percentage_1h_in_currency,
          change24h: coin.price_change_percentage_24h,
          change7d: coin.price_change_percentage_7d_in_currency,
        }));

        setCoins(formatted);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch market data", error);
      }
    };

    fetchMarket();

    const interval = setInterval(fetchMarket, 5000); // refresh every 30 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-[40px] pb-[80px]">
      <div className="max-w-[1600px] mx-auto px-6">
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
              {loading ? (
                <tr>
                  <td colSpan="8" className="text-center py-10 text-slate-400">
                    Loading market data...
                  </td>
                </tr>
              ) : (
                sortedCoins.map((coin, i) => {
                  const change1h = coin.change1h ?? 0;
                  const change24h = coin.change24h ?? 0;
                  const change7d = coin.change7d ?? 0;

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
                      <td className="px-6 py-5 min-w-[240px]">
                        <div className="flex items-center justify-between gap-4">
                          {/* Left Side */}
                          <div className="flex items-center gap-4 overflow-hidden">
                            <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-white shrink-0">
                              {coin.symbol.slice(0, 3)}
                            </div>

                            <div className="flex flex-col overflow-hidden">
                              <span className="text-white font-medium truncate max-w-[140px]">
                                {coin.name}
                              </span>

                              <span className="text-slate-400 text-xs truncate max-w-[120px]">
                                {coin.symbol}
                              </span>
                            </div>
                          </div>

                          {/* Buy Button */}
                          <span className="text-[10px] px-2 py-[2px] rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 shrink-0">
                            Buy
                          </span>
                        </div>
                      </td>

                      {/* Price */}
                      <td className="px-6 py-5 text-slate-200 font-medium">
                        $
                        {coin.price.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>

                      {/* 1h */}
                      <td
                        className={`px-6 py-5 font-medium ${pos1h ? "text-green-400" : "text-red-400"}`}
                      >
                        {pos1h ? "▲ +" : "▼ "}
                        {Math.abs(change1h).toFixed(2)}%
                      </td>

                      {/* 24h */}
                      <td
                        className={`px-6 py-5 font-medium ${pos24h ? "text-green-400" : "text-red-400"}`}
                      >
                        {pos24h ? "▲ +" : "▼ "}
                        {Math.abs(change24h).toFixed(2)}%
                      </td>

                      {/* 7d */}
                      <td
                        className={`px-6 py-5 font-medium ${pos7d ? "text-green-400" : "text-red-400"}`}
                      >
                        {pos7d ? "▲ +" : "▼ "}
                        {Math.abs(change7d).toFixed(2)}%
                      </td>

                      {/* Chart */}
                      <td className="px-6 py-5">
                        <Sparkline data={coin.history} />
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
