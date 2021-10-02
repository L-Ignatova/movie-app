import React, { useReducer } from "react";

export const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
});

const defaultCartState = {items: [], totalAmount: 0};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity;
        const itemAlreadyExists = state.items.filter(item => item.id === action.item.id);
        let updatedItems;

        if (itemAlreadyExists.length > 0) {
            const existingItem = itemAlreadyExists[0];

            const updatedQuantity = existingItem.quantity + action.item.quantity;
            const updatedItem = { ...existingItem, quantity: updatedQuantity}

            updatedItems = state.items
                .filter(item => item.id !== action.item.id)
                .concat(updatedItem);
            
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    } 
    if (action.type === 'REMOVE') {
        const currentItem = state.items.filter(item => item.id === action.id)[0];

        const updatedTotalAmount = state.totalAmount - currentItem.price * currentItem.quantity;
        const updatedItems = state.items.filter(item => item.id !== action.id);

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => { dispatchCartAction({type: 'ADD', item: item});};
    const removeItemFromCartHandler = (id) => { dispatchCartAction({type:'REMOVE', id: id}) };

    const CartCtx = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={CartCtx}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;