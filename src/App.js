import { useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Cart from './components/cart/Cart';
import CartProvider from './store/cart-context';
import AddMovieForm from './components/movies/AddMovieForm';
import { getMovieList } from './store/data.js';

import { useSelector } from 'react-redux';

function App() {
    const cartIsVisible = useSelector(state => state.uiCart.cartIsVisible);
    const addFormIsVisible = useSelector(state => state.uiAdd.addFormIsVisible);

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [reload, setReload] = useState(false);

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
            {cartIsVisible && <Cart />}
            {addFormIsVisible && <AddMovieForm 
                onAddMovie={() => setReload(true)} 
            />}
            <Header 
            />
            <HomePage 
                movies={movies}
                isLoading={isLoading}
                hasError={hasError} 
            />
        </CartProvider>
    );
}

export default App;
