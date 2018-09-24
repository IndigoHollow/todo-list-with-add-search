const initialState = "";

export default function filterWork(state = initialState, action) {
  if (action.type === "SEARCH_WORK") {
    return action.payload;
  }

  return state;
}
