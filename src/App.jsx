import Field from "./Field";
import { useReducer, useEffect } from "react";
import { reducer } from "./lib/reducer";
import TetrisContext from "./lib/context";
import {
  generateQueue,
  generateTetrisField,
  generateEmptyField,
  combineFields,
  placeFigure,
  figureToColor,
} from "./tetris";

const board = generateTetrisField(10, 20);
const queue = generateQueue(100000);
const currentFigure = "left-zig-zag";
const location = placeFigure(currentFigure, 10);
const initialState = {
  board,
  queue,
  currentFigure,
  location,
};
console.log(initialState);

const colorMap = {
  "left-zig-zag": "red",
  "l-shaped": "blue",
  "j-shaped": "orange",
  "right-zig-zag": "green",
  "square": "yellow",
  "straight": "cyan",
  "t-shaped": "purple",
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 250);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const userBoard = generateEmptyField(10, 20);
  for (let i = 0; i < state.location.length; i++) {
    userBoard[state.location[i]] = figureToColor(state.currentFigure);
  }
  return (
    <TetrisContext.Provider value={{ state, dispatch }}>
      <div className="flex gap-6 flex-wrap bg-black">
        <Field bricks={combineFields(state.board, userBoard)} />
      </div>
    </TetrisContext.Provider>
  );
}
