import { figureToColor, placeFigure } from "../tetris";

export function reducer(state, action) {
  if (action.type === "TICK") {
    // Can we move down any further?
    // Yes?
    //   move us down
    // No?
    //   write out position to the board
    //   pick the next figure out of the queue
    //   place the figure as our new location

    const newLocation = state.location.map((d) => d + 12);

    // let canMove = newLocation.every((index) => state.board[index] === "E");
    let canMove = true;
    for (let i = 0; i < newLocation.length; i++) {
      if (state.board[newLocation[i]] !== "E") {
        canMove = false;
      }
    }

    if (canMove) {
      return { ...state, location: newLocation };
    } else {
      const newBoard = state.board.slice();
      for (let i = 0; i < state.location.length; i++) {
        newBoard[state.location[i]] = figureToColor(state.currentFigure);
      }
      const [newFigure, ...newQueue] = state.queue;
      return {
        ...state,
        board: newBoard,
        currentFigure: newFigure,
        queue: newQueue,
        location: placeFigure(newFigure, 10),
      };
    }
  } else if (action.type === "MOVE_LEFT") {
    const newLocation = state.location.map((d) => d - 1);
    let canMove = true;
    for (let i = 0; i < newLocation.length; i++) {
      if (state.board[newLocation[i]] !== "E") {
        canMove = false;
      }
    }
    return { ...state, location: canMove ? newLocation : state.location };
  } else if (action.type === "MOVE_RIGHT") {
    const newLocation = state.location.map((d) => d + 1);
    let canMove = true;
    for (let i = 0; i < newLocation.length; i++) {
      if (state.board[newLocation[i]] !== "E") {
        canMove = false;
      }
    }
    return { ...state, location: canMove ? newLocation : state.location };
  } else if (action.type === "MOVE_DOWN") {
    const newLocation = state.location.map((d) => d + 12);
    let canMove = true;
    for (let i = 0; i < newLocation.length; i++) {
      if (state.board[newLocation[i]] !== "E") {
        canMove = false;
      }
    }
    return { ...state, location: canMove ? newLocation : state.location };
  } else if (action.type === "INSTANT_DROP") {
    return state;
  } else {
    return state;
  }
}
