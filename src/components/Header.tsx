import React from 'react';
import classes from './Header.module.css';

import { useSelector } from 'react-redux';
import { uiCartActions, uiAddFormActions } from '../store/ui-slice';
import { useAppDispatch } from '../store';
import { RootState } from '../store';

const Header = () => {
    const dispatch = useAppDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items)
    const numberOfCartItems = cartItems.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0)

    const toggleCart = (ev: React.MouseEvent<HTMLLIElement>) => {
        dispatch(uiCartActions.toggle());
    }
    const toggleAddForm = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(uiAddFormActions.toggle());
    }

    return (
        <header className={classes.header}>
            <ul className={classes.menu}>
                <li>
                    <button onClick={toggleAddForm}>Add movie</button>
                </li>
                <li className={classes.cart} onClick={toggleCart}>
                    <div className={classes["shopping-cart"]}>
                       <i className="fas fa-shopping-cart"></i>
                        <p>{numberOfCartItems}</p> 
                    </div>
                    
                </li>
            </ul>
        </header>
    );
}

export default Header;