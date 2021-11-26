import React from 'react';
import Movie from './Movie/Movie';
import styles from './Movies.module.scss';

interface Props {
    movies: Movie[];
    buttonOnClick: (actionType: string, movieId: number) => void;
    closeOnClick: React.MouseEventHandler;
    dotsOnClick: (movieId: number) => void;
    movieOnClick: (movieId: number) => void;
    isDotsClicked: boolean | string;
}

const Movies: React.FC<Props> = ({ movies, buttonOnClick, closeOnClick, dotsOnClick, movieOnClick, isDotsClicked }) => {
    return (
        <div className={styles.movies}>
            {movies.map((el: Movie) => {
                return (
                    <Movie
                        key={el.id}
                        data={el}
                        buttonOnClick={(actionType: string, movieId: number) => buttonOnClick(actionType, movieId)}
                        closeOnClick={closeOnClick}
                        movieOnClick={(movieId: number) => movieOnClick(movieId)}
                        isDotsClicked={isDotsClicked === String(el.id) ? true : false}
                        dotsOnClick={(movieId: number) => dotsOnClick(movieId)}
                    />
                );
            })}
        </div>
    );
};

export default Movies;
