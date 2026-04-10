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
    const time = 1000 * Math.pow(0.9, level);

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
      <div className="flex flex-col md:grid md:grid-cols-game bg-black min-h-screen items-center">
        <div className="order-3 md:order-none w-full">
          <HighScores highScores={state.highestScores}></HighScores>
        </div>
        <div className="order-2 md:order-none">
          <Field bricks={combineFields(state.tetrisField, userField)} />
        </div>
        <div className="order-1 md:order-none w-full">
          <GameStats currentScore={state.currentScore}></GameStats>
        </div>
      </div>
      <div className="md:hidden flex justify-center gap-3 bg-black pb-6 pt-2">
        <button
          className="w-16 h-16 bg-gray-700 text-white text-2xl rounded-lg active:bg-gray-500 font-gameOver select-none"
          onTouchStart={(e) => { e.preventDefault(); dispatch({ type: "MOVE_LEFT" }); }}
        >
          &#9664;
        </button>
        <button
          className="w-16 h-16 bg-gray-700 text-white text-2xl rounded-lg active:bg-gray-500 font-gameOver select-none"
          onTouchStart={(e) => { e.preventDefault(); dispatch({ type: "MOVE_DOWN" }); }}
        >
          &#9660;
        </button>
        <button
          className="w-16 h-16 bg-gray-700 text-white text-2xl rounded-lg active:bg-gray-500 font-gameOver select-none"
          onTouchStart={(e) => { e.preventDefault(); dispatch({ type: "MOVE_RIGHT" }); }}
        >
          &#9654;
        </button>
        <button
          className="w-16 h-16 bg-gray-700 text-white text-2xl rounded-lg active:bg-gray-500 font-gameOver select-none"
          onTouchStart={(e) => { e.preventDefault(); dispatch({ type: "ROTATE" }); }}
        >
          &#8635;
        </button>
        <button
          className="w-16 h-16 bg-gray-700 text-white text-xl rounded-lg active:bg-gray-500 font-gameOver select-none"
          onTouchStart={(e) => { e.preventDefault(); dispatch({ type: "INSTANT_DROP" }); }}
        >
          &#9660;&#9660;
        </button>
      </div>
      {state.isGameOver ? <GameOver /> : null}
    </TetrisContext.Provider>
  );
}
