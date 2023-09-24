import combineReducer from "../Reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: combineReducer,
});
