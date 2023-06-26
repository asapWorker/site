import { configureStore} from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart";
import { moviesApi } from "./services/moviesApi";
import { reviewsApi } from "./services/reviewsApi";
import { cinemasApi } from "./services/cinemasApi";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [cinemasApi.reducerPath]: cinemasApi.reducer,
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([moviesApi.middleware, reviewsApi.middleware]),
  devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>;