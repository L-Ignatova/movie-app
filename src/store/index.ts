import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cartSlice } from "./cart-slice";
import { uiAddFormSlice, uiCartSlice } from "./ui-slice";

const store = configureStore({
    reducer: {
        uiCart: uiCartSlice.reducer,
        uiAdd: uiAddFormSlice.reducer,
        cart: cartSlice.reducer,
    }
});

type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store;