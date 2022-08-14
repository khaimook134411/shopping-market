import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Items {
  name: string;
  price: number;
  countItem: number;
}
export type listItems = {
  count: number;
  items: Items[];
};

const initialState: listItems = {
  count: 0,
  items: [],
};
export const basketStore = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    increase: (state) => {
      return { ...state, count: state.count + 1 };
    },
    decrease: (state) => {
      return { ...state, count: state.count - 1 };
    },
    delItem: (
      state,
      action: PayloadAction<{ name: string; price: number }>
    ) => {
      if (
        state.items.filter((value) => {
          return value.name === action.payload.name;
        }).length
      ) {
        var items = state.items.map((item) => item.name);
        let index = items.indexOf(action.payload.name);

        if (state.items[index].countItem === 1) {
          //TO DO ทำให้ list นี้หายไป
          state.items = initialState.items;
        } else {
          state.items[index].countItem -= 1;
          state.items[index].price -= action.payload.price;
          // console.log(action.payload.price);
        }
      } else {
        return {
          ...state,
          items: [
            ...state.items,
            {
              name: action.payload.name,
              price: action.payload.price,
              countItem: 1,
            },
          ],
        };
      }
    },
    addItem: (
      state,
      action: PayloadAction<{ name: string; price: number }>
    ) => {
      if (
        state.items.filter((value) => {
          return value.name === action.payload.name;
        }).length
      ) {
        var items = state.items.map((item) => item.name);
        let index = items.indexOf(action.payload.name);
        state.items[index].countItem += 1;
        state.items[index].price += action.payload.price;
      } else {
        return {
          ...state,
          items: [
            ...state.items,
            {
              name: action.payload.name,
              price: action.payload.price,
              countItem: 1,
            },
          ],
        };
      }
    },
  },
});
export const { increase, decrease, delItem, addItem } = basketStore.actions;
