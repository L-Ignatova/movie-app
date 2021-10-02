import { configureStore } from "@reduxjs/toolkit";
import { uiAddFormSlice, uiCartSlice } from "./ui-slice";

const store = configureStore({
    reducer: {
        uiCart: uiCartSlice.reducer,
        uiAdd: uiAddFormSlice.reducer,
    }
});

export default store;