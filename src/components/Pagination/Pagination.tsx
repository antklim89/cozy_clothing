import { Link } from 'gatsby';
import { FC } from 'react';

import Button from '~/components/Button';

import styles from './Pagination.module.scss';
import { PaginationPropTypes } from './Pagination.types';


const Pagination: FC<PaginationPropTypes> = ({
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
                        className={styles.link}
                        to={previousPagePath}
                    >
                        <Button>
                            Previous
                        </Button>
                    </Link>
                )}
            <span className={styles.pageNumber}>
                PAGE: {humanPageNumber}/{numberOfPages}
            </span>
            {nextPagePath.length === 0
                ? (
                    <Button disabled className={styles.hidden}>
                        Next
                    </Button>
                )
                : (
                    <Link
                        className={styles.link}
                        to={nextPagePath}
                    >
                        <Button>
                            Next
                        </Button>
                    </Link>
                )}
        </div>
    );
};

export default Pagination;
