import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Items {
  id: number;
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
      action: PayloadAction<{ id: number; name: string; price: number }>
    ) => {
      if (
        state.items.filter((value) => {
          return value.id === action.payload.id;
        }).length
      ) {
        var items = state.items.map((item) => item.id);
        let index = items.indexOf(action.payload.id);

        if (state.items[index].countItem === 1) {
          state.items = state.items.filter((item, index) => {
            return item.id !== action.payload.id;
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
              id: action.payload.id,
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
      action: PayloadAction<{ id: number; name: string; price: number }>
    ) => {
      if (
        state.items.filter((value) => {
          return value.id === action.payload.id;
        }).length
      ) {
        let items = state.items.map((item) => item.id);
        let index = items.indexOf(action.payload.id);
        state.items[index].countItem += 1;
        state.items[index].price += action.payload.price;
      } else {
        return {
          ...state,
          items: [
            ...state.items,
            {
              id: action.payload.id,
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
