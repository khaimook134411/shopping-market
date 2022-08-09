import { createSlice } from "@reduxjs/toolkit";

const initialState = { countItem: 0 };
export const basketStore = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    increase: (state) => {
      return { ...state, countItem: state.countItem + 1 };
    },
    decrease: (state) => {
      return { ...state, countItem: state.countItem - 1 };
    },
  },
});
export const { increase, decrease } = basketStore.actions;
