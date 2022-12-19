import { Link } from 'gatsby';
import { FC } from 'react';

import Button from '~/components/Button';

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
                    <Button disabled className={styles.hidden}>
                        Previous
                    </Button>
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
                    <Button disabled className={styles.hidden}>
                        Next
                    </Button>
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
