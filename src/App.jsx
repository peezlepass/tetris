import Field from "./Field";
import { useReducer, useEffect } from "react";
import { reducer } from "./lib/reducer";
import TetrisContext from "./lib/context";
import {
  generateQueue,
  generateTetrisField,
  generateUserField,
  combineFields,
  placeFigure,
  figureToColor,
} from "./tetris";

const initialState = {
  tetrisField: generateTetrisField(10, 20),
  queue: generateQueue(100000),
  currentFigure: "right-zig-zag",
  location: placeFigure("right-zig-zag", 10),
  rotation: 0,
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
  console.log(state);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        dispatch({ type: "MOVE_LEFT" });
      } else if (event.key === "ArrowRight") {
        dispatch({ type: "MOVE_RIGHT" });
      } else if (event.key === " ") {
        dispatch({ type: "INSTANT_DROP" });
      } else if (event.key === "ArrowDown") {
        dispatch({ type: "MOVE_DOWN" });
      } else if (event.key === "ArrowUp") {
        dispatch({ type: "ROTATE" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearInterval(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const userField = generateUserField(10, 20);
  for (let i = 0; i < state.location.length; i++) {
    userField[state.location[i]] = figureToColor(state.currentFigure);
  }
  return (
    <TetrisContext.Provider value={{ state, dispatch }}>
      <div className="justify-center flex gap-6 flex-wrap bg-black">
        <Field bricks={combineFields(state.tetrisField, userField)} />
      </div>
    </TetrisContext.Provider>
  );
}
