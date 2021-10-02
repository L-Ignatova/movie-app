import { useRef } from 'react';
import classes from './MovieItem.module.css';

import { useDispatch } from 'react-redux';
import cartActions from '../../store/cart-slice';

const MovieItem = (props) => {
    const inputQuantityRef = useRef();

    const dispatch = useDispatch();
    const addToCartHandler = (quantity) => {
        dispatch(cartActions.addItem({
            id: props.id,
            name: props.name,
            quantity: quantity,
            price: props.price,
        }))
    }
    
    const submitHandler = (ev) => {
        ev.preventDefault();
        const movieQuantity = inputQuantityRef.current.value;
        const enteredMovieQuantity = +movieQuantity;
        addToCartHandler(enteredMovieQuantity);
    }
    
    return <div className={classes["movie-item"]}>
        <div className={classes["image-holder"]}>
            <img src={props.url} alt={props.name} />
        </div>
        <div className={classes.content}>
            <h4>{props.name}</h4>
            <p className={classes.year}>{props.year}</p>
            <p className={classes.description}>{props.description}</p>
            <div className={classes["price-form"]}>
                <p className={classes.price}>${props.price}</p>
                <form onSubmit={submitHandler}>
                    <label htmlFor="quantity"></label>
                    <input ref={inputQuantityRef} type="number" name="quantity" id="quantity" min="1" max="5" step="1" defaultValue="1" />
                    <button>Buy</button>
                </form>
            </div>
            
        </div>
    </div>
}

export default MovieItem;