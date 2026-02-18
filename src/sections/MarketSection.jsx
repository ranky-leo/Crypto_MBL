
import Sparkline from "../components/Sparkline";

const coins = Array.from({ length: 10 }).map((_, i) => {
  const history = Array.from({ length: 7 }).map(() =>
    +(100 + Math.random() * 100).toFixed(2)
  );
  return {
    id: i + 1,
    name: "Coin " + (i + 1),
    price: history[6],
    history
  };
});

export default function MarketSection() {
  return (
    <div className="max-w-6xl mx-auto px-10 py-20">
      <h2 className="text-3xl font-semibold mb-8 text-cyan-400">
        Live Market Snapshot
      </h2>

      <div className="border border-slate-800 bg-black/40 backdrop-blur rounded-lg p-6">
        <table className="w-full text-sm">
          <thead className="text-gray-400">
            <tr>
              <th className="text-left py-3">Rank</th>
              <th className="text-left py-3">Coin</th>
              <th className="text-left py-3">Price</th>
              <th className="text-left py-3">7D</th>
            </tr>
          </thead>
          <tbody>
            {coins.map(c => (
              <tr key={c.id} className="border-t border-slate-800 hover:bg-slate-800/40 transition">
                <td className="py-4">{c.id}</td>
                <td>{c.name}</td>
                <td>${c.price}</td>
                <td><Sparkline data={c.history} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
