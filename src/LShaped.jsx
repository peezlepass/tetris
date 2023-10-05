export default function LShaped() {
  return (
    <div className="grid grid-cols-3 w-48">
      <div
        className="w-16 h-16 bg-blue-300 border-blue-200 border-8"
        style={{ borderStyle: "outset" }}
      ></div>
      <div
        className="w-16 h-16 bg-blue-300 border-blue-200 border-8 row-start-2"
        style={{ borderStyle: "outset" }}
      ></div>
      <div
        className="w-16 h-16 bg-blue-300 border-blue-200 border-8 row-start-2 "
        style={{ borderStyle: "outset" }}
      ></div>
      <div
        className="w-16 h-16 bg-blue-300 border-blue-200 border-8 row-start-2"
        style={{ borderStyle: "outset" }}
      ></div>
    </div>
  );
}
