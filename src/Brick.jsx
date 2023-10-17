export default function Brick({ color }) {
  const colorMap = {
    yellow: "bg-yellow-300 border-yellow-200",
    cyan: "bg-cyan-300 border-cyan-200",
    purple: "bg-purple-300 border-purple-200",
    green: "bg-green-300 border-green-200",
    orange: "bg-orange-300 border-orange-200",
    blue: "bg-blue-300 border-blue-200",
    red: "bg-red-300 border-red-200",
    gray: "bg-gray-500 border-gray-600",
  };

  return (
    <div
      className={`w-16 h-16 ${colorMap[color]} border-8`}
      style={{ borderStyle: "outset" }}
    ></div>
  );
}
