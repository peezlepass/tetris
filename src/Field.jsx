import Blank from "./Blank";
import Brick from "./Brick";

export default function Field({ bricks }) {
  return (
    <div className="grid grid-rows-22 grid-cols-12">
      {bricks.map((brick, index) => {
        if (brick === "B") {
          return <Brick key={index} color="gray"></Brick>;
        } else if (brick === "E") {
          return <Blank key={index} />;
        } else {
          return <Brick key={index} color={brick}></Brick>;
        }
      })}
    </div>
  );
}
