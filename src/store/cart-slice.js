import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalAmount: 0,
    },
    reducers: {
        addItem(state, action) {
            const receivedItem = action.payload;
            const updatedTotalAmount = state.totalAmount + receivedItem.price * receivedItem.quantity;
            const itemAlreadyExists = state.items.filter(item => item.id === receivedItem.id);
    
            if (itemAlreadyExists.length > 0) {
                const existingItem = itemAlreadyExists[0];
                existingItem.quantity = existingItem.quantity + receivedItem.quantity;
            } else {
                state.items.push(receivedItem);
            }
            state.totalAmount = updatedTotalAmount;
        },

        removeItem(state, action) {
            const id = action.payload;
            const currentItem = state.items.filter(item => item.id === id)[0];

            state.totalAmount = state.totalAmount - currentItem.price * currentItem.quantity;
            state.items = state.items.filter(item => item.id !== id);
        }
    },
});


const cartActions = cartSlice.actions;
export default cartActions;