import Blank from "./Blank";
import Brick from "./Brick";

export default function Field({ bricks }) {
  return (
    <div className="grid grid-rows-22 grid-cols-12">
      {bricks.map((brick) => {
        if (brick === "E") {
          return <Brick color="gray"></Brick>;
        } else if (brick === "B") {
          return <Blank />;
        } else {
          return <Brick color={brick}></Brick>;
        }
      })}
    </div>
  );
}
