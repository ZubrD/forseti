import { combineReducers, configureStore } from "@reduxjs/toolkit";
import deputyReducer from "./deputy";

const rootReducer = combineReducers({deputy: deputyReducer});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
