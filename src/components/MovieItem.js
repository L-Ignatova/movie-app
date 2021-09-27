import { useContext, useRef } from 'react/cjs/react.development';
import { CartContext } from '../store/cart-context';
import classes from './MovieItem.module.css';

const MovieItem = (props) => {
    const inputQuantityRef = useRef();
    const context = useContext(CartContext);
    const addMovieHandler = (quantity) => {
        context.addItem({
            id: props.id,
            name: props.name,
            quantity: quantity,
            price: props.price,
        });
    }
    
    const submitHandler = (ev) => {
        ev.preventDefault();
        const movieQuantity = inputQuantityRef.current.value;
        const enteredMovieQuantity = +movieQuantity;
        addMovieHandler(enteredMovieQuantity);
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