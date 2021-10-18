import classes from './CartItem.module.css';
import cartActions from '../../store/cart-slice';
import { useAppDispatch } from '../../store';

interface IProps {
    id: string; 
    key: string;
    name: string;
    quantity: number;
    price: number;
}

const CartItem: React.FC<IProps> = (props) => {
    const dispatch = useAppDispatch();
    
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