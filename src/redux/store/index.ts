import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api";
import likedProductReducer from "../slice/likeProducts"
import currencySlice from "../slice/currencySlice"
import addcartReducer from "../slice/addCartSlice"

const store = configureStore({
    reducer: {
        wishlist: likedProductReducer,
        currency: currencySlice,
        carts: addcartReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store }