import { Link } from 'gatsby';
import { FC } from 'react';


import styles from './Pagination.module.scss';
import { PaginationPropTypes } from './Pagination.types';

import { Button } from '~/components/Button';


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
                <Button disabled className={styles.hidden} component="span">
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
                <Button disabled className={styles.hidden} component="span">
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
