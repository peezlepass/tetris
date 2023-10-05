export default function TShaped() {
  return (
    <div className="grid grid-cols-3 w-48">
      <div
        className="w-16 h-16 bg-purple-300 border-purple-200 border-8 col-start-2 row-start-1"
        style={{ borderStyle: "outset" }}
      ></div>
      <div
        className="w-16 h-16 bg-purple-300 border-purple-200 border-8 col-start-1 row-start-2"
        style={{ borderStyle: "outset" }}
      ></div>
      <div
        className="w-16 h-16 bg-purple-300 border-purple-200 border-8 col-start-2 row-start-2"
        style={{ borderStyle: "outset" }}
      ></div>
      <div
        className="w-16 h-16 bg-purple-300 border-purple-200 border-8 col-start-3 row-start-2"
        style={{ borderStyle: "outset" }}
      ></div>
    </div>
  );
}
