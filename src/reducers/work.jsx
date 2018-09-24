const initialState = ["Learn Nodejs", "Master Atom shortcuts"];

export default function reducerWork(state = initialState, action) {
  if (action.type === "ADD_WORK") {
    return [...state, action.payload];
  } else if (action.type === "DELETE_WORK") {
    return [...state, "removed item"];
  }

  return state;
}
