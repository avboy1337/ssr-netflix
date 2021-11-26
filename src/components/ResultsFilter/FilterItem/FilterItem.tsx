import React from 'react';
import classnames from 'classnames/bind';
import { useHistory, useLocation } from 'react-router';
import styles from './FilterItem.module.scss';

interface Props {
    type: string;
    activeFilter: string;
    onClick: (filterToUse: string) => any;
}

let cx = classnames.bind(styles);

const FilterItem: React.FC<Props> = ({ type, activeFilter, onClick }) => {
    const history = useHistory();
    const location = useLocation();

    const liClasses = cx('filterItem', {
        activeFilter: activeFilter === type,
    });

    const clicked = (type: any) => {
        history.push(`${location.pathname}?genre=${type.toLowerCase()}`);
        onClick(type);
    };

    return (
        <li onClick={() => clicked(type)} className={liClasses}>
            {type}
        </li>
    );
};

export default FilterItem;
