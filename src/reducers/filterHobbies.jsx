const initialState = "";

export default function filterHobbies(state = initialState, action) {
  if (action.type === "SEARCH_HOBBY") {
    return action.payload;
  }

  return state;
}
