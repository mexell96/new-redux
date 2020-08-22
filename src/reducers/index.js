import { combineReducers } from "redux";
import countsReducer from "./countsReducer";

const rootReducer = combineReducers({
  output: countsReducer,
});

export default rootReducer;
