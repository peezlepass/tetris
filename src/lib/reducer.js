export function reducer(state, action) {
  switch (action.type) {
    case "TICK":
      return { ...state, location: state.location.map((d) => d + 12) };
    default:
      return state;
  }
}
