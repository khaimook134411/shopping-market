import { combineReducers } from "@reduxjs/toolkit";
import { basketStore } from "./basketStore";

export const rootReducer = combineReducers({
  countItem: basketStore.reducer,
});

export type rootType = ReturnType<typeof rootReducer>;
