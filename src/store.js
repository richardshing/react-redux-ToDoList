import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import listReducer from "./reducers/listReducer.js";

const store = createStore(
  combineReducers({listReducer}),
  {}, 
  applyMiddleware(logger)
);

export default store;