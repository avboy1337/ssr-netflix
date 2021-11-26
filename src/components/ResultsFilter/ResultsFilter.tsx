import React from 'react';
import FilterItem from './FilterItem/FilterItem';
import styles from './ResultsFilter.module.scss';

interface Props {
    onClick: (filterToUse: string) => any;
    activeFilter: string;
}

const ResultsFilter: React.FC<Props> = ({ onClick, activeFilter }) => {
    const filterItemTypes: string[] = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

    return (
        <ul className={styles.resultsFilter}>
            {filterItemTypes.map((type, index) => {
                return <FilterItem key={index} onClick={() => onClick(type)} activeFilter={activeFilter} type={type} />;
            })}
        </ul>
    );
};

export default ResultsFilter;
