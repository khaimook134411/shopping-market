import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type listItems = {
  countItem: number;
  // items: [
  //   {
  //     description: string;
  //     price: number;
  //   }
  // ];
  items: string[];
};

const initialState: listItems = {
  countItem: 0,
  // items: [{ description: "", price: 0 }],
  items: [],
};
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
    // setItem: (
    //   state,
    //   action: PayloadAction<{ description: string; price: number }>
    // ) => {
    //   return {
    //     ...state,
    //     countItem: state.countItem + 1,
    //     items: {
    //       description: action.payload.description,
    //       price: action.payload.price,
    //     },
    //   };
    // },
    addItem: (state, action: PayloadAction<{ name: string }>) => {
      return {
        ...state,
        countItem: state.countItem + 1,
        items: [
          ...state.items,
          // {
          //   description: action.payload.description,
          //   price: action.payload.price,
          // },
          action.payload.name,
        ],
      };
    },
  },
});
export const { increase, decrease, addItem } = basketStore.actions;
