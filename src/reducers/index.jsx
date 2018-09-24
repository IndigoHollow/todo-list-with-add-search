import { combineReducers } from "redux";

import reducerHobby from "./hobbies";
import reducerWork from "./work";
import filterHobbies from "./filterHobbies";
import filterWork from "./filterWork";

export default combineReducers({
  reducerHobby,
  reducerWork,
  filterHobbies,
  filterWork
});
