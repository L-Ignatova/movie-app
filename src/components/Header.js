import React from 'react';
import classes from './Header.module.css';

import { useDispatch } from 'react-redux';
import { uiCartActions, uiAddFormActions } from '../store/ui-slice';
import { useSelector } from 'react-redux';

const Header = (props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items)
    const numberOfCartItems = cartItems.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0)

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