import React from 'react';
import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
    return (
        <div className={styles.PageNotFound}>
            <h2>Page not found</h2>
            <p>Please try again with a different URL</p>
        </div>
    );
};

export default PageNotFound;
