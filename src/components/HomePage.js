import classes from './HomePage.module.css';
import { getMovieList } from '../store/data.js';
import MovieList from './MovieList';
import { useState, useEffect } from 'react';


const HomePage = (props) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchMoviesHandler() {
        const movies = await getMovieList();
        setMovies(movies.filter(movie => movie !== null));
        setIsLoading(false);
    }
    
    useEffect(() => {
        fetchMoviesHandler();
    }, []);

    return (
        <div className={classes.homepage}>
            {isLoading && <p>Loading ...</p>}
            {(isLoading === false && movies.length === 0) 
                ? <div>
                    <img className={classes.image} src="../../assets/box.jpg" alt="emptyBox" />
                    <p>No movies in the store yet</p>
                </div> 
                : <MovieList movies={movies} />}
        </div>
    );
};

export default HomePage;