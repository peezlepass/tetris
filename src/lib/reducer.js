export function reducer(state, action) {
  switch (action.type) {
    case "TICK":
      const newLocation = state.location.map((d) => d + 12);
      let canMove = true;
      for (let i = 0; i < newLocation.length; i++) {
        if (state.board[newLocation[i]] !== "E") {
          canMove = false;
        }
      }
      return { ...state, location: canMove ? newLocation : state.location };
    default:
      return state;
  }
}
