import Field from "./Field";
import { useReducer, useEffect } from "react";
import { reducer } from "./lib/reducer";
import TetrisContext from "./lib/context";
import {
  generateQueue,
  generateTetrisField,
  generateEmptyField,
  combineFields,
} from "./tetris";

const board = generateTetrisField(10, 20);
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
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

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
