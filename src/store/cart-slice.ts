import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICartItem {
    id: string; 
    name: string;
    quantity: number;
    price: number; 
}
interface IState {
    items: ICartItem[];
    totalAmount: number;
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalAmount: 0,
    } as IState,
    reducers: {
        addItem(state, action: PayloadAction<ICartItem>) {
            const receivedItem: ICartItem = action.payload;
            const updatedTotalAmount = state.totalAmount + receivedItem.price * receivedItem.quantity;
            const itemAlreadyExists: ICartItem[] = state.items.filter(item => item.id === receivedItem.id);
    
            if (itemAlreadyExists.length > 0) {
                const existingItem: ICartItem = itemAlreadyExists[0];
                existingItem.quantity = existingItem.quantity + receivedItem.quantity;
            } else {
                state.items.push(receivedItem);
            }
            state.totalAmount = updatedTotalAmount;
        },

        removeItem(state, action: PayloadAction<string>) {
            const id = action.payload;
            const currentItem: ICartItem = state.items.filter(item => item.id === id)[0];

            state.totalAmount = state.totalAmount - currentItem.price * currentItem.quantity;
            state.items = state.items.filter(item => item.id !== id);
        }
    },
});


const cartActions = cartSlice.actions;
export default cartActions;