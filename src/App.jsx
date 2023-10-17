import Field from "./Field";
import { useReducer } from "react";
import { reducer } from "./lib/reducer";
import TetrisContext from "./lib/context";
import { generateTetrisField } from "./tetris";

const initialState = {
  board: generateTetrisField(10, 20),
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TetrisContext.Provider value={{ state, dispatch }}>
      <div className="flex gap-6 flex-wrap bg-black">
        <Field cells={state.board} />
      </div>
    </TetrisContext.Provider>
  );
}
