import { combineReducers } from "redux";

import reducerHobby from "./hobbies";
import reducerWork from "./work";
import filterHobbies from "./filterHobbies";

export default combineReducers({
  reducerHobby,
  reducerWork,
  filterHobbies
});
