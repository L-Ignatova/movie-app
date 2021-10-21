import React from 'react';
import classes from './Header.module.css';
import { useSelector } from 'react-redux';
import { uiCartActions, uiAddFormActions } from '../store/ui-slice';
import { useAppDispatch } from '../store';
import { RootState } from '../store';

const Header = () => {
    const dispatch = useAppDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items)
    const numberOfCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

    const toggle = (ev: React.MouseEvent) => {
        if ((ev.target as HTMLElement).id === 'add') {
            dispatch(uiAddFormActions.toggle());
        } else if ((ev.currentTarget as HTMLElement).id === 'cart') {
            dispatch(uiCartActions.toggle());
        }
    }

    return (
        <header className={classes.header}>
            <ul className={classes.menu}>
                <li>
                    <button id="add" onClick={toggle}>Add movie</button>
                </li>
                <li className={classes.cart}>
                    <button id="cart" className={classes["shopping-cart"]} onClick={toggle}>
                       <i className="fas fa-shopping-cart"></i>
                        <p>{numberOfCartItems}</p> 
                    </button>
                    
                </li>
            </ul>
        </header>
    );
}

export default Header;