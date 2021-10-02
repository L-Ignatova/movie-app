import { useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Cart from './components/cart/Cart';
import CartProvider from './store/cart-context';
import AddMovieForm from './components/movies/AddMovieForm';
import { getMovieList } from './store/data.js';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const [addMovieFormIsShows, setAddMovieIsShown] = useState(false);

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [reload, setReload] = useState(false);

    const toggleCartVisibilityHandler = () => {
        setCartIsShown((prevState) => {
            return !prevState;
        });
    }
    const toggleAddFormVisibilityHandler = () => {
        setAddMovieIsShown((prevState) => !prevState);
    }

    const fetchMoviesHandler = async () => {
        setIsLoading(true);
        try {
            const movies = await getMovieList();
            const nonNullMovies = movies.filter(movie => movie !== null);
            setMovies(nonNullMovies);
        } catch (err) {
            setHasError(true);
        }
        setIsLoading(false);
        setReload(false);
    }
    
    useEffect(() => {
        fetchMoviesHandler();
    }, [reload]);

    return (
        <CartProvider className="App">
            {cartIsShown && <Cart onClose={toggleCartVisibilityHandler}></Cart>}
            {addMovieFormIsShows && <AddMovieForm 
                onAddMovie={() => setReload(true)} 
                onClose={toggleAddFormVisibilityHandler}
            />}
            <Header 
                onShowCart={toggleCartVisibilityHandler} 
                onShowAdd={toggleAddFormVisibilityHandler}/>
            <HomePage 
                movies={movies}
                isLoading={isLoading}
                hasError={hasError} 
            />
        </CartProvider>
    );
}

export default App;
