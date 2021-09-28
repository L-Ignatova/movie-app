import classes from './HomePage.module.css';
import { getMovieList } from '../store/data.js';
import MovieList from './MovieList';
import { useState, useEffect } from 'react';


const HomePage = (props) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    async function fetchMoviesHandler() {
        setIsLoading(true);
        try {
            const movies = await getMovieList();
            setMovies(movies.filter(movie => movie !== null));
        } catch (err) {
            setHasError(true);
        }
        
        setIsLoading(false);
    }
    
    useEffect(() => {
        fetchMoviesHandler();
    }, []);

    const isEmptyArray = isLoading === false && movies.length === 0;

    return (
        <div className={classes.homepage}>
            {hasError && <p style={{color: "red"}}>Failed to get movies</p>}
            {isLoading && <p>Loading ...</p>}
            {(isEmptyArray && hasError === false) 
                ? <div>
                    <img className={classes.image} src="../../assets/box.jpg" alt="emptyBox" />
                    <p>No movies in the store yet</p>
                </div> 
                : <MovieList movies={movies} />}
        </div>
    );
};

export default HomePage;