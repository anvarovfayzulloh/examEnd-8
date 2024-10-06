import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api";
import likedProductReducer from "../slice/likeProducts"

const store = configureStore({
    reducer: {
        wishlist: likedProductReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store }