import {combineReducers} from "redux";
import {forcastReducer} from "./forecastReducer.js";

export const rootReducer = combineReducers({
  forecastModule: forcastReducer
});
