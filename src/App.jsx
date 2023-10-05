import Straight from "./Straight";
import Block from "./Block";
import LShaped from "./LShaped";
import LShapedReversed from "./LShapedReversed";
import LeftZigZag from "./LeftZigZag";
import RightZigZag from "./RightZigZag";
import TShaped from "./TShaped";

function App() {
  return (
    <div className="space-y-8">
      <Straight />
      <Block />
      <LShaped />
      <LShapedReversed />
      <LeftZigZag />
      <RightZigZag />
      <TShaped />
    </div>
  );
}

export default App;
