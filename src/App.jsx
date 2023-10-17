import Field from "./Field";
import { useReducer } from "react";
import { reducer } from "./lib/reducer";
import TetrisContext from "./lib/context";
import { generateQueue, generateTetrisField } from "./tetris";
const board = generateTetrisField(10, 20);
board[26] = "cyan";
board[38] = "cyan";
board[50] = "cyan";
board[62] = "cyan";
const initialState = {
  board,
  queue: generateQueue(100000),
};
console.log(initialState);

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TetrisContext.Provider value={{ state, dispatch }}>
      <div className="flex gap-6 flex-wrap bg-black">
        <Field bricks={state.board} />
      </div>
    </TetrisContext.Provider>
  );
}
