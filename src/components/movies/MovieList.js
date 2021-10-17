import classes from './MovieList.module.css';
import MovieItem from './MovieItem.tsx';

const MovieList = (props) => {
    return <ul className={classes.list}>
        {props.movies.map(movie => <li key={movie.id} >
            <MovieItem 
                key={movie.id} 
                id={movie.id}
                name={movie.name} 
                year={movie.yearOfRelease}
                description={movie.description}
                url={movie.imageUrl}
                price={movie.price} />
            </li>)}
    </ul>;
};

export default MovieList;