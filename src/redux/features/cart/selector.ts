import { RootState, store } from "@/redux/store";

const selectorCartModule = (state: RootState) => state.cart;
const selectorCartItems = (state: RootState) => selectorCartModule(state).itemsCounts;
export const selectTicketAmount = (state: RootState, id: string) => selectorCartItems(state)[id] || 0;
export const selectCartItemsAmount = (state: RootState) => selectorCartModule(state).count;