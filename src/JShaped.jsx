export default function JShaped() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 w-48">
      <div
        className="w-16 h-16 bg-orange-300 border-orange-200 border-8 col-start-2 row-start-1"
        style={{ borderStyle: "outset" }}
      ></div>
      <div
        className="w-16 h-16 bg-orange-300 border-orange-200 border-8 col-start-2 row-start-2"
        style={{ borderStyle: "outset" }}
      ></div>
      <div
        className="w-16 h-16 bg-orange-300 border-orange-200 border-8 col-start-2 row-start-3"
        style={{ borderStyle: "outset" }}
      ></div>
      <div
        className="w-16 h-16 bg-orange-300 border-orange-200 border-8 col-start-1 row-start-3"
        style={{ borderStyle: "outset" }}
      ></div>
    </div>
  );
}
