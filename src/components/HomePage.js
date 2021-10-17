import classes from './HomePage.module.css';
import MovieList from './movies/MovieList';

const HomePage = (props) => {
    const isEmptyArray = props.isLoading === false && props.movies.length === 0;

    return (
        <div className={classes.homepage}>
            {props.hasError && <p style={{color: "red"}}>Failed to get movies</p>}
            {props.isLoading && <p>Loading ...</p>}
            {(isEmptyArray && props.hasError === false) 
                ? <div>
                    <img className={classes.image} src="../../assets/box.jpg" alt="emptyBox" />
                    <p>No movies in the store yet</p>
                </div> 
                : <MovieList movies={props.movies} />}
        </div>
    );
};

export default HomePage;