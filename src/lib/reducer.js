import { figureToColor, placeFigure, rotateFigure } from "../tetris";

export function reducer(state, action) {
  if (action.type === "TICK") {
    console.log(state.location);
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
    } else {
      const newTetrisField = state.tetrisField.slice();
      for (let i = 0; i < state.location.length; i++) {
        newTetrisField[state.location[i]] = figureToColor(state.currentFigure);
      }
      const [newFigure, ...newQueue] = state.queue;
      return {
        ...state,
        tetrisField: newTetrisField,
        currentFigure: newFigure,
        queue: newQueue,
        location: placeFigure(newFigure, 10),
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
      rotation: (state.rotation + 90) % 360,
      location: canMove ? newLocation : state.location,
    };
  } else {
    return state;
  }
}
