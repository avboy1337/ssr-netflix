import React from 'react';
import Button from '../UI/Button/Button';
import { useHistory, useLocation } from 'react-router';
import styles from './ResultsSort.module.scss';

interface Props {
    onClick: (currentDirection: string) => void;
    styleType: string;
}

const ResultsSort: React.FC<Props> = React.memo(({ onClick, styleType }) => {
    return (
        <div className={styles.resultsSort}>
            <p>sort by</p>
            <Button type="button" title="release date" styleType={styleType} onClick={() => onClick(styleType)} />
        </div>
    );
});

export default ResultsSort;
