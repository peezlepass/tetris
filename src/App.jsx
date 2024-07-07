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
import GameOver from "./GameOver";
import HighScores from "./HighScores";
import GameStats from "./GameStats";

const storedHighestScores = window.localStorage.getItem("highScores");
const initialState = {
  tetrisField: generateTetrisField(10, 20),
  queue: generateQueue(100000),
  currentFigure: "right-zig-zag",
  location: placeFigure("right-zig-zag", 10),
  rotation: 0,
  isGameOver: false,
  currentScore: 0,
  highestScores: storedHighestScores
    ? JSON.parse(storedHighestScores)
    : [
        { name: "Ell", score: 830 },
        { name: "Jam", score: 510 },
      ],
};

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
    const level = Math.floor(state.currentScore / 100);
    const time = 1000 * Math.pow(0.75, level);

    const timer = setInterval(() => {
      dispatch({ type: "TICK" });
    }, time);
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
  }, [state.currentScore]);

  const userField = generateUserField(10, 20);
  for (let i = 0; i < state.location.length; i++) {
    userField[state.location[i]] = figureToColor(state.currentFigure);
  }
  // console.log(state.tetrisField);
  // console.log(userField);
  // console.log(state.isGameOver);

  return (
    <TetrisContext.Provider value={{ state, dispatch }}>
      {/* <div className="justify-center flex gap-6 flex-wrap bg-black"> */}
      <div className="grid grid-cols-game bg-black h-screen items-center">
        <HighScores highScores={state.highestScores}></HighScores>
        <Field bricks={combineFields(state.tetrisField, userField)} />
        <GameStats currentScore={state.currentScore}></GameStats>
      </div>
      {state.isGameOver ? <GameOver /> : null}
    </TetrisContext.Provider>
  );
}
