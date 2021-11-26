import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Button from '../UI/Button/Button';
import MovieForm from '../MovieForm/MovieForm';
import styles from './AddMovie.module.scss';

interface Props {
    onClick: React.MouseEventHandler;
    onAddMovie: Function;
}

const initialValues = { title: '', release_date: '', genres: [], poster_path: '', overview: '', runtime: '' };

const AddMovie: React.FC<Props> = ({ onClick, onAddMovie }) => {
    const handleAddMovie = (data: formikMovie): void => {
        const newMovie: AddMovie = {
            title: data.title,
            release_date: data.release_date,
            poster_path: data.poster_path,
            overview: data.overview,
            runtime: parseInt(data.runtime),
            genres: [],
            vote_average: 0,
        };
        data.genres.forEach((el: Genre) => newMovie.genres.push(el.value));
        onAddMovie(newMovie);
    };

    return (
        <div className={styles.addMovie}>
            <Button onClick={onClick} type="button" title="&#10005;" styleType="modalClose" />
            <h3>add movie</h3>
            <MovieForm action={(data: formikMovie) => handleAddMovie(data)} initialValues={initialValues} />
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddMovie: (movie: Movie) => dispatch(actions.addMovie(movie)),
    };
};

export default connect(null, mapDispatchToProps)(AddMovie);
