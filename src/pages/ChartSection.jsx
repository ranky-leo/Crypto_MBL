import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

export default function ChartSection({ data }) {
  return (
    <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-lg">Price Chart</h2>

        <div className="flex gap-3 text-xs">
          <button className="px-3 py-1 rounded bg-blue-600 text-white">
            1D
          </button>
          <button className="px-3 py-1 rounded bg-slate-800 text-slate-300">
            7D
          </button>
          <button className="px-3 py-1 rounded bg-slate-800 text-slate-300">
            1M
          </button>
          <button className="px-3 py-1 rounded bg-slate-800 text-slate-300">
            1Y
          </button>
        </div>
      </div>

      <div className="h-[260px] mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" hide />
            <YAxis hide domain={["auto", "auto"]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#16c784"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="h-[100px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="time" hide />
            <YAxis hide />
            <Bar dataKey="volume" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
