import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../store/cart-context';
import classes from './CartItem.module.css';

const CartItem = (props) => {
    const context = useContext(CartContext);
    
    const removeItemHandler = () => {
        context.removeItem(props.id);
    }

    return <div className={classes.item}>
        <h4>{props.name}</h4>
        <div className={classes.actions}>
            <p>{props.quantity} x {props.price}</p>
            <button onClick={removeItemHandler}>Remove</button>
        </div>
    </div>;
}

export default CartItem;