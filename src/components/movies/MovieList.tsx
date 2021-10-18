import classes from './MovieList.module.css';
import MovieItem from './MovieItem';
import {Movie} from '../../store/data'
import React from 'react';

type IProps = {
    movies: Movie[];
}

const MovieList: React.FC<IProps> = ({children, ...props}) => {
    return <ul className={classes.list}>
        {props.movies.map(movie => <li key={movie.id} >
            <MovieItem 
                key={movie.id.toString()} 
                id={movie.id.toString()}
                name={movie.name} 
                year={movie.yearOfRelease}
                description={movie.description}
                url={movie.imageUrl}
                price={movie.price} />
            </li>)}
    </ul>;
};

export default MovieList;