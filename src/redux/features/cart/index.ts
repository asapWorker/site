import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartState {
  count: number,
  itemsCounts: Record<string, number>
}

const initialState: CartState = {
  count: 0,
  itemsCounts: {}
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, {payload}: PayloadAction<string>) => {
      const curItemCount = state.itemsCounts[payload] || 0;

      if (curItemCount === 30) return;

      state.itemsCounts[payload] = curItemCount + 1;
      state.count += 1;
    },

    decrement: (state, {payload}: PayloadAction<string>) => {
      const curItemCount = state.itemsCounts[payload] || 0; 

      if (curItemCount) return;

      state.count -= 1;

      if (curItemCount === 1) {
        delete state.itemsCounts[payload];
        return;
      }

      state.itemsCounts[payload] -= 1;
    }
  }
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;