import { figureToColor, placeFigure, rotateFigure } from "../tetris";

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

    // let canMove = newLocation.every((index) => state.tetrisField[index] === "E");
    let canMove = true;
    for (let i = 0; i < newLocation.length; i++) {
      if (state.tetrisField[newLocation[i]] !== "E") {
        canMove = false;
      }
    }

    if (canMove) {
      return { ...state, location: newLocation };
      // } else if (!canMove && true) {
    } else {
      const newTetrisField = state.tetrisField.slice();
      for (let i = 0; i < state.location.length; i++) {
        newTetrisField[state.location[i]] = figureToColor(state.currentFigure);
      }

      // remove lines from tetris field if possible
      // for loops will check for a possibility of a removal
      for (let i = 12; i < newTetrisField.length - 12; i += 12) {
        let hasNoEmptyCells = true;
        for (let j = 1; j < 11; j++) {
          if (newTetrisField[i + j] === "E") {
            hasNoEmptyCells = false;
          }
        }

        if (hasNoEmptyCells) {
          newTetrisField.splice(i, 12);
          newTetrisField.splice(
            12,
            0,
            "B",
            "E",
            "E",
            "E",
            "E",
            "E",
            "E",
            "E",
            "E",
            "E",
            "E",
            "B"
          );
        }
      }

      const [newFigure, ...newQueue] = state.queue;
      let newFigureLocation = placeFigure(newFigure, 10);

      let gameOver = false;
      for (let i = 0; i < newFigureLocation.length; i++) {
        if (newTetrisField[newFigureLocation[i]] !== "E") {
          gameOver = true;
        }
      }

      return {
        ...state,
        tetrisField: newTetrisField,
        currentFigure: newFigure,
        queue: newQueue,
        location: newFigureLocation,
        rotation: 0,
        isGameOver: gameOver,
      };
    }
  } else if (action.type === "MOVE_LEFT") {
    const newLocation = state.location.map((d) => d - 1);
    let canMove = true;
    for (let i = 0; i < newLocation.length; i++) {
      if (state.tetrisField[newLocation[i]] !== "E") {
        canMove = false;
      }
    }
    return { ...state, location: canMove ? newLocation : state.location };
  } else if (action.type === "MOVE_RIGHT") {
    const newLocation = state.location.map((d) => d + 1);
    let canMove = true;
    for (let i = 0; i < newLocation.length; i++) {
      if (state.tetrisField[newLocation[i]] !== "E") {
        canMove = false;
      }
    }
    return { ...state, location: canMove ? newLocation : state.location };
  } else if (action.type === "MOVE_DOWN") {
    const newLocation = state.location.map((d) => d + 12);
    let canMove = true;
    for (let i = 0; i < newLocation.length; i++) {
      if (state.tetrisField[newLocation[i]] !== "E") {
        canMove = false;
      }
    }
    return { ...state, location: canMove ? newLocation : state.location };
  } else if (action.type === "INSTANT_DROP") {
    const drop = (location) => {
      // Check if you can go down 1 line
      const newLocation = location.map((d) => d + 12);
      let canMove = true;
      for (let i = 0; i < newLocation.length; i++) {
        if (state.tetrisField[newLocation[i]] !== "E") {
          canMove = false;
        }
      }
      // If you can
      if (canMove) {
        return drop(newLocation);
      } else {
        return location;
      }
      // return drop(location + 12)
      // else return location
    };

    const droppedLocation = drop(state.location);

    return { ...state, location: droppedLocation };
  } else if (action.type === "ROTATE") {
    const newLocation = rotateFigure(
      state.currentFigure,
      state.location,
      state.rotation
    );
    let canMove = true;
    for (let i = 0; i < newLocation.length; i++) {
      if (state.tetrisField[newLocation[i]] !== "E") {
        canMove = false;
      }
    }
    return {
      ...state,
      rotation: canMove ? (state.rotation + 90) % 360 : state.rotation,
      location: canMove ? newLocation : state.location,
    };
  } else {
    return state;
  }
}
