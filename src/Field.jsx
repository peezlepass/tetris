import Brick from "./Brick";

export default function Field({ cells }) {
  return (
    <div className="grid grid-rows-20 grid-cols-10">
      {cells.map(() => {
        return <Brick color="gray" />;
      })}
    </div>
  );
}
