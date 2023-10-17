export default function LShaped() {
  return (
    <div className="grid grid-rows-3 grid-cols-2 w-48">
      <div
        className="w-16 h-16 bg-blue-300 border-blue-200 border-8 row-start-1 col-start-1"
        style={{ borderStyle: "outset" }}
      ></div>
      <div
        className="w-16 h-16 bg-blue-300 border-blue-200 border-8 row-start-2 col-start-1"
        style={{ borderStyle: "outset" }}
      ></div>
      <div
        className="w-16 h-16 bg-blue-300 border-blue-200 border-8 row-start-3 col-start-1"
        style={{ borderStyle: "outset" }}
      ></div>
      <div
        className="w-16 h-16 bg-blue-300 border-blue-200 border-8 row-start-3 col-start-2"
        style={{ borderStyle: "outset" }}
      ></div>
    </div>
  );
}
