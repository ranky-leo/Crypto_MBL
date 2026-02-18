export default function Sparkline({ data }) {
  if (!data || data.length === 0) return null;

  const width = 120;
  const height = 40;

  const min = Math.min(...data);
  const max = Math.max(...data);

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - min) / (max - min || 1)) * height;

    return `${x},${y}`;
  });

  const path = `M ${points.join(" L ")}`;

  const positive = data[data.length - 1] >= data[0];

  return (
    <svg width={width} height={height}>
      <path
        d={path}
        fill="none"
        stroke={positive ? "#22c55e" : "#ef4444"}
        strokeWidth="2"
      />
    </svg>
  );
}
