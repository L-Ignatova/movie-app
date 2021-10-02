import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import cartActions from '../../store/cart-slice';

const CartItem = (props) => {
    const dispatch = useDispatch();
    
    const removeItemHandler = () => {
        dispatch(cartActions.removeItem(props.id));
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