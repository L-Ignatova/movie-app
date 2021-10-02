import React, { useContext } from 'react';
import { CartContext } from '../store/cart-context';
import classes from './Header.module.css';

import { useDispatch } from 'react-redux';
import { uiCartActions, uiAddFormActions } from '../store/ui-slice';

const Header = (props) => {
    const context = useContext(CartContext);
    const numberOfCartItems = context.items.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0)

    const dispatch = useDispatch();
    const toggleCart = () => {
        dispatch(uiCartActions.toggle());
    }
    const toggleAdd = () => {
        dispatch(uiAddFormActions.toggle());
    }

    return (
        <header className={classes.header}>
            <ul className={classes.menu}>
                <li>
                    <button onClick={toggleAdd}>Add movie</button>
                </li>
                <li className={classes.cart} onClick={toggleCart}>
                    <div className={classes["shopping-cart"]}>
                       <i class="fas fa-shopping-cart"></i>
                        <p>{numberOfCartItems}</p> 
                    </div>
                    
                </li>
            </ul>
        </header>
    );
}

export default Header;