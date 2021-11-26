import React from 'react';
import Button from '../../UI/Button/Button';
import Dot from '../../UI/Dot/Dot';
import ImgWithErrorHandling from '../../ImgWithErrorHandling/ImgWithErrorHandling';
import styles from './Movie.module.scss';

interface Props {
    data: Movie;
    buttonOnClick: (actionType: string, movieId: number) => void;
    closeOnClick: React.MouseEventHandler;
    dotsOnClick: (movieId: number) => void;
    movieOnClick: (movieId: number) => void;
    isDotsClicked: boolean | string;
}

const Movie: React.FC<Props> = ({ data, buttonOnClick, closeOnClick, dotsOnClick, movieOnClick, isDotsClicked }) => {
    let infoBlock;
    if (isDotsClicked) {
        infoBlock = (
            <div className={styles.infoBlock}>
                <Button onClick={closeOnClick} type="button" title="&#10005;" styleType="infoBlockClose" />
                <Button
                    onClick={() => buttonOnClick('editMovie', data.id)}
                    type="button"
                    title="edit"
                    styleType="infoBlock"
                />
                <Button
                    onClick={() => buttonOnClick('deleteMovie', data.id)}
                    type="button"
                    title="delete"
                    styleType="infoBlock"
                />
            </div>
        );
    } else {
        infoBlock = (
            <div className={styles.dots} onClick={() => dotsOnClick(data.id)}>
                <Dot />
                <Dot />
                <Dot />
            </div>
        );
    }

    return (
        <div className={styles.movie}>
            <ImgWithErrorHandling
                src={data.poster_path}
                alt="Movie poster"
                movieOnClick={(movieId: number) => movieOnClick(movieId)}
                id={data.id}
            />
            <div className={styles.wrapper}>
                <h3>{data.title}</h3>
                <p className={styles.releaseDate}>{data.release_date.split('-')[0]}</p>
            </div>
            <p className={styles.genres}>{data.genres.join(' & ')}</p>
            {infoBlock}
        </div>
    );
};

export default Movie;
