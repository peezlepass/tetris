import Field from "./Field";
import { useReducer } from "react";
import { reducer } from "./lib/reducer";
import TetrisContext from "./lib/context";
import {
  generateQueue,
  generateTetrisField,
  generateEmptyField,
  combineFields,
} from "./tetris";
const board = generateTetrisField(10, 20);
const userBoard = generateEmptyField(10, 20);
userBoard[26] = "cyan";
userBoard[38] = "cyan";
userBoard[50] = "cyan";
userBoard[62] = "cyan";
const initialState = {
  board,
  userBoard,
  queue: generateQueue(100000),
};
console.log(initialState);

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TetrisContext.Provider value={{ state, dispatch }}>
      <div className="flex gap-6 flex-wrap bg-black">
        <Field bricks={combineFields(state.board, state.userBoard)} />
      </div>
    </TetrisContext.Provider>
  );
}
