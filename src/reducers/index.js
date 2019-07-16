import { combineReducers } from "redux";
import { messageReducer } from "./messages";
import { inputReducer } from "./input";

export const rootReducer = combineReducers({
  message: messageReducer,
  input: inputReducer
});
