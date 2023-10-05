export default function LeftZigZag() {
  return (
    <div className="grid grid-cols-2 w-48">
      <div
        className="w-16 h-16 bg-red-300 border-red-200 border-8 col-start-1 row-start-1"
        style={{ borderStyle: "outset" }}
      ></div>
      <div
        className="w-16 h-16 bg-red-300 border-red-200 border-8 col-start-2 row-start-1"
        style={{ borderStyle: "outset" }}
      ></div>
      <div
        className="w-16 h-16 bg-red-300 border-red-200 border-8 col-start-2 row-start-2"
        style={{ borderStyle: "outset" }}
      ></div>
      <div
        className="w-16 h-16 bg-red-300 border-red-200 border-8 col-start-3 row-start-2"
        style={{ borderStyle: "outset" }}
      ></div>
    </div>
  );
}
