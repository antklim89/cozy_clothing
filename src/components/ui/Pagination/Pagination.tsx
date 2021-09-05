import { Link } from 'gatsby';
import { FC } from 'react';

import styles from './Pagination.module.scss';
import { PaginationPropTypes } from './Pagination.types';


export const Pagination: FC<PaginationPropTypes> = ({
    previousPagePath,
    nextPagePath,
    humanPageNumber,
    numberOfPages,
}) => {
    if (numberOfPages === 1) return null;
    return (
        <div className={styles.root}>
            {previousPagePath.length === 0
                ? (
                    <button disabled className={styles.hidden} type="button">
                        Previous
                    </button>
                )
                : (
                    <Link
                        className="btn"
                        to={previousPagePath}
                    >
                        Previous
                    </Link>
                )}
            <span className={styles.pageNumber}>
                {humanPageNumber}
            </span>
            {nextPagePath.length === 0
                ? (
                    <button disabled className={styles.hidden} type="button">
                        Next
                    </button>
                )
                : (
                    <Link
                        className="btn"
                        to={nextPagePath}
                    >
                        Next
                    </Link>
                )}
        </div>
    );
};
