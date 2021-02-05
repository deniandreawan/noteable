import { combineReducers } from "redux";

import noteReducer from "./noteReducer";
import filterReducer from "./filterReducer";

const reducers = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
});

export default reducers;
