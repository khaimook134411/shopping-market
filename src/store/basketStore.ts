import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Items {
  name: string;
  price: number;
  countItem: number;
}
export type listItems = {
  items: Items[];
};

const initialState: listItems = {
  items: [],
};
export const basketStore = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    resetItem: (state) => {
      return { ...state, items: initialState.items };
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
          state.items = state.items.filter((item, index) => {
            return item.name !== action.payload.name;
          });
        } else {
          state.items[index].countItem -= 1;
          state.items[index].price -= action.payload.price;
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
        let items = state.items.map((item) => item.name);
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
export const { delItem, addItem, resetItem } = basketStore.actions;
