import Modal from '../Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiCartActions } from '../../store/ui-slice';
import cartActions from '../../store/cart-slice';

const Cart = (props) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const items = cart.items.map((item) => 
        <CartItem 
            name={item.name} 
            price={item.price} 
            quantity={item.quantity} 
            id={item.id} 
            key={item.id}
        />)
    
    const orderSubmitHandler = (ev) => {
        ev.preventDefault();
        console.log(`Ordering movies for $${cart.totalAmount.toFixed(2)} ...`);
        for (const item of cart.items) {
            dispatch(cartActions.removeItem(item.id));
        }
    }

    const toggle = () => {
        dispatch(uiCartActions.toggle());
    }

    return <Modal onClose={toggle}>
        <h2 className={classes.heading}>Your cart</h2>

        {items.length === 0 ? <p>No items in your cart yet.</p> : items}
        <hr />
        <div className={classes.bottom}>
            <p>Total: <span>${cart.totalAmount.toFixed(2)}</span></p>
            <div>
                <button className={classes.cancel} onClick={toggle}>Cancel</button>
                <button onClick={orderSubmitHandler}>Order</button>
            </div>
            
        </div>
    </Modal>;
}

export default Cart;