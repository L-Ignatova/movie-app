import React, { useContext } from 'react';
import { CartContext } from '../store/cart-context';
import classes from './Header.module.css';

const Header = (props) => {
    const context = useContext(CartContext);
    const numberOfCartItems = context.items.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0)

    return (
        <header className={classes.header}>
            <ul className={classes.menu}>
                <li>
                    <button>Home</button>
                </li>
                <li>
                    <button onClick={props.onShowAdd}>Add movie</button>
                </li>
                <li className={classes.cart} onClick={props.onShowCart}>
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