import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Cart from './components/cart/Cart';
import AddMovieForm from './components/movies/AddMovieForm';
import { getMovieList, Movie } from './store/data';
import { RootState } from './store';
import { useSelector } from 'react-redux';

function App() {
    const cartIsVisible = useSelector((state: RootState) => state.uiCart.cartIsVisible);
    const addFormIsVisible = useSelector((state: RootState) => state.uiAdd.addFormIsVisible);

    const [movies, setMovies] = useState<Movie[] | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);
    const [reload, setReload] = useState<boolean>(false);

    const fetchMoviesHandler = async () => {
        setIsLoading(true);
        try {
            const movies = await getMovieList();
            const nonNullMovies = movies.filter((movie: Movie) => movie !== null);
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
        <div className="App">
            {cartIsVisible && <Cart />}
            {addFormIsVisible && <AddMovieForm
                onAddMovie={() => setReload(true)}
            />}
            <Header />
            <HomePage
                movies={movies}
                isLoading={isLoading}
                hasError={hasError}
            />
        </div>
    );
}

export default App;
