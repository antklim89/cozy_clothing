import { Link } from 'gatsby';
import { FC } from 'react';

import { Button } from '../Button';

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
            {previousPagePath.length === 0 ? (
                <Button className={styles.hidden}>
                    Previous
                </Button>
            ) : (
                <Button
                    component={Link}
                    to={previousPagePath}
                >
                    Previous
                </Button>
            )}
            <span className={styles.pageNumber}>
                {humanPageNumber}
            </span>
            {nextPagePath.length === 0 ? (
                <Button className={styles.hidden}>
                    Next
                </Button>
            ) : (
                <Button
                    component={Link}
                    to={nextPagePath}
                >
                    Next
                </Button>
            )}
        </div>
    );
};
