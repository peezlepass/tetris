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
// const userBoard = generateEmptyField(10, 20);
// userBoard[26] = "cyan";
// userBoard[38] = "cyan";
// userBoard[50] = "cyan";
// userBoard[62] = "cyan";
const queue = generateQueue(100000);
//const currentShape = queue.shift();
const currentShape = "straight";
const location = [28, 29, 30, 31];
const initialState = {
  board,
  queue,
  currentShape,
  location,
};
console.log(initialState);

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const userBoard = generateEmptyField(10, 20);
  for (let i = 0; i < state.location.length; i++) {
    userBoard[state.location[i]] = "cyan";
  }
  return (
    <TetrisContext.Provider value={{ state, dispatch }}>
      <div className="flex gap-6 flex-wrap bg-black">
        <Field bricks={combineFields(state.board, userBoard)} />
      </div>
    </TetrisContext.Provider>
  );
}
