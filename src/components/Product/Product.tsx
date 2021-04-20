import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';


import { Select } from '../Select';

import styles from './Product.module.scss';
import { ProductPropTypes } from './Product.types';

import { Button } from '~/components/Button';


export const Product: FC<ProductPropTypes> = ({ product }) => {
    const isNew = new Date(product.careatedAt).getTime() > new Date().setMonth(new Date().getMonth() - 1);

    return (
        <>
            <div className={styles.root}>
                <ul className={styles.imagesPreview}>
                    {product.imagesPreview.map((image) => (
                        <li className={styles.imagePreview} key={image.images.fallback?.src}>
                            <div>
                                <GatsbyImage
                                    alt={product.title}
                                    image={image}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
                <div className={styles.image}>
                    <GatsbyImage
                        alt={product.title}
                        image={product.images[0]}
                        key={product.images[0].images.fallback?.src}
                    />
                </div>
                <div className={styles.body}>
                    <div className={styles.titleSection}>
                        <h1>
                            {product.title}
                        </h1>
                        {isNew && (
                            <span className={styles.new}>NEW</span>
                        )}
                        <b className={styles.price}>
                            $
                            {product.price}
                        </b>

                    </div>
                    <div className={styles.brandSection}>
                        <h2>
                            {product.brand}
                            <br />
                        </h2>
                        <p>
                            {product.type}
                        </p>
                    </div>
                    <div className={styles.cartSection}>
                        <div className={styles.selectSize}>
                            <div>
                                SIZE:
                                {' '}
                                {' '}
                                <Select id="select-size">
                                    <option value="XXL">XXL</option>
                                    <option value="XL">XL</option>
                                    <option value="L">L</option>
                                    <option value="M">M</option>
                                    <option value="S">S</option>
                                </Select>
                            </div>
                        </div>
                        <div className={styles.qty}>
                            QTY:
                            {' '}
                            {' '}
                            <Button>+</Button>
                            <span>1</span>
                            <Button>-</Button>
                        </div>
                        <div className={styles.cardBtn}>
                            <Button>Add To Card</Button>
                        </div>
                    </div>
                </div>
            </div>
            <ReactMarkdown>
                {product.rawMarkdownBody.replace(/\s/ig, ' ')}
            </ReactMarkdown>
        </>
    );
};
