import Modal from '../Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import { useContext } from 'react';
import { CartContext } from '../../store/cart-context';

const Cart = (props) => {
    const context = useContext(CartContext);

    const items = context.items.map((item) => 
        <CartItem 
            name={item.name} 
            price={item.price} 
            quantity={item.quantity} 
            id={item.id} 
            key={item.id}
        />)
    
    const orderSubmitHandler = (ev) => {
        ev.preventDefault();
        console.log(`Ordering movies for $${context.totalAmount.toFixed(2)} ...`);
        for (const item of context.items) {
            context.removeItem(item.id);
        }
    }

    return <Modal onClose={props.onClose}>
        <h2 className={classes.heading}>Your cart</h2>

        {items.length === 0 ? <p>No items in your cart yet.</p> : items}
        <hr />
        <div className={classes.bottom}>
            <p>Total: <span>${context.totalAmount.toFixed(2)}</span></p>
            <div>
                <button className={classes.cancel} onClick={props.onClose}>Cancel</button>
                <button onClick={orderSubmitHandler}>Order</button>
            </div>
            
        </div>
    </Modal>;
}

export default Cart;