const initialState = [
  {
    id: Date.now().toString(),
    name: "Test hobby"
  }
];

export default function reducerHobby(state = initialState, action) {
  if (action.type === "ADD_HOBBIE") {
    return [...state, action.payload];
  }

  return state;
}
