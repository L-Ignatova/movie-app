import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";
import { uiAddFormSlice, uiCartSlice } from "./ui-slice";

const store = configureStore({
    reducer: {
        uiCart: uiCartSlice.reducer,
        uiAdd: uiAddFormSlice.reducer,
        cart: cartSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;