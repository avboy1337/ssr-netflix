import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Button from '../UI/Button/Button';
import MovieForm from '../MovieForm/MovieForm';
import styles from './EditMovie.module.scss';

interface Props {
    onClick: React.MouseEventHandler;
    selectedMovie: EditMovie;
    onEditMovie: Function;
    movies: Movie[];
    filteredMovies: Movie[];
    movieOpened: Movie | null;
}

const EditMovie: React.FC<Props> = ({ selectedMovie, onClick, onEditMovie, movies, filteredMovies, movieOpened }) => {
    const setGenresValues = () => {
        let selectedGenres: Genre[] = [];
        selectedMovie.genres.forEach((el) => {
            return selectedGenres.push({ label: el, value: el });
        });
        return selectedGenres;
    };

    const initialValues = {
        title: selectedMovie.title,
        release_date: selectedMovie.release_date,
        genres: setGenresValues(),
        poster_path: selectedMovie.poster_path,
        overview: selectedMovie.overview,
        runtime: selectedMovie.runtime,
    };

    const handleEditMovie = (data: formikMovie): void => {
        const editedMovie: EditMovie = {
            id: selectedMovie.id,
            title: data.title,
            release_date: data.release_date,
            poster_path: data.poster_path,
            overview: data.overview,
            runtime: parseInt(data.runtime),
            genres: [],
        };
        data.genres.forEach((el: Genre) => editedMovie.genres.push(el.value));
        onEditMovie(editedMovie, movies, filteredMovies, movieOpened);
    };

    return (
        <div className={styles.editMovie}>
            <Button onClick={onClick} type="button" title="&#10005;" styleType="modalClose" />
            <h3>edit movie</h3>
            <p className={styles.movieId}>movie id</p>
            <p className={styles.movieIdValue}>{selectedMovie.id}</p>
            <MovieForm action={(data: formikMovie) => handleEditMovie(data)} initialValues={initialValues} />
        </div>
    );
};

const mapStateToProps = (state: AllState) => {
    return {
        movies: state.movies.movies,
        filteredMovies: state.movies.filteredMovies,
        movieOpened: state.movies.movieOpened,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onEditMovie: (editedMovie: Movie, movies: Movie[], filteredMovies: Movie[], movieOpened: Movie | null) =>
            dispatch(actions.editMovie(editedMovie, movies, filteredMovies, movieOpened)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMovie);
