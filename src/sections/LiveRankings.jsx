import Sparkline from "../components/Sparkline";

export default function LiveRankings() {
  const coins = [
    { symbol: "BTC", name: "Bitcoin" },
    { symbol: "ETH", name: "Ethereum" },
    { symbol: "XRP", name: "XRP" },
    { symbol: "SOL", name: "Solana" },
    { symbol: "USDT", name: "Tether" },
    { symbol: "USDC", name: "USD Coin" },
  ];

  const data = coins.map((coin, i) => {
    const history = Array.from({ length: 20 }).map(
      () => +(100 + Math.random() * 20).toFixed(2),
    );

    const change = (Math.random() * 6 - 3).toFixed(2);

    return {
      ...coin,
      price: (Math.random() * 5000 + 50).toFixed(2),
      changeValue: (Math.random() * 2000).toFixed(2),
      changePercent: change,
      history,
    };
  });

  return (
    <section className="py-[100px] bg-white text-slate-800">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-10">Market Overview</h2>

        <div className="rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide">
              <tr>
                <th className="text-left px-6 py-4">Name</th>
                <th className="text-left px-6 py-4">Price</th>
                <th className="text-left px-6 py-4">24h Change</th>
                <th className="text-left px-6 py-4">% Change</th>
                <th className="text-left px-6 py-4">Chart</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>

            <tbody>
              {data.map((coin, i) => {
                const positive = coin.changePercent >= 0;

                return (
                  <tr
                    key={i}
                    className="border-t border-slate-100 hover:bg-slate-50 transition"
                  >
                    {/* Name */}
                    <td className="px-6 py-5 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold">
                        {coin.symbol}
                      </div>

                      <div>
                        <div className="font-semibold">{coin.symbol}</div>
                        <div className="text-xs text-slate-500">
                          {coin.name}
                        </div>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="px-6 py-5 font-medium">
                      ₱
                      {coin.price.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </td>

                    {/* 24h Value */}
                    <td
                      className={`px-6 py-5 font-medium ${positive ? "text-green-600" : "text-red-600"}`}
                    >
                      {positive ? "+" : "-"}₱{coin.changeValue}
                    </td>

                    {/* % Change */}
                    <td
                      className={`px-6 py-5 font-medium ${positive ? "text-green-600" : "text-red-600"}`}
                    >
                      {positive ? "+" : ""}
                      {coin.changePercent}%
                    </td>

                    {/* Chart */}
                    <td className="px-6 py-5">
                      <Sparkline data={coin.history} />
                    </td>

                    {/* Arrow */}
                    <td className="px-6 py-5 text-slate-400 text-lg">›</td>
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
