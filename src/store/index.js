import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import weatherReducer from "./weather";

const reducer = combineReducers({
  weather: weatherReducer,
});

const store = configureStore({ reducer });

export default store;
