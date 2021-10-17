import { createSlice } from '@reduxjs/toolkit';

export const uiCartSlice = createSlice({
    name: 'uiCart',
    initialState: { cartIsVisible: false },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

export const uiAddFormSlice = createSlice({
    name: 'uiAddForm',
    initialState: { addFormIsVisible: false },
    reducers: {
        toggle(state) {
            state.addFormIsVisible = !state.addFormIsVisible;
        }
    }
});

export const uiCartActions = uiCartSlice.actions;
export const uiAddFormActions = uiAddFormSlice.actions;