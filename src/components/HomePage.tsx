import { Movie } from '../store/data';
import classes from './HomePage.module.css';
import MovieList from './movies/MovieList';

interface IProps {
    movies: Movie[]; 
    isLoading: boolean;
    hasError: boolean;
}

const HomePage: React.FC<IProps> = ({movies, isLoading, hasError}) => {
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