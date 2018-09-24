const initialState = [
  {
    id: Date.now().toString(),
    name: "Learn Nodejs"
  },
  {
    id: Date.now().toString(),
    name: "Master Atom shortcuts"
  }
];

export default function reducerWork(state = initialState, action) {
  if (action.type === "ADD_WORK") {
    return [...state, action.payload];
  }

  return state;
}
