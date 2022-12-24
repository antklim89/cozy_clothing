import { GatsbyImage } from 'gatsby-plugin-image';
import { FC, useEffect, useState } from 'react';
import styles from './ProductImages.module.scss';
import { IProduct } from '~/types';


const ProductImages: FC<IProduct> = ({ imagesPreview, title, images }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const hasNext = imageIndex < imagesPreview.length - 1;
    const hasPrev = imageIndex > 0;


    const nextImage = () => {
        setImageIndex((currentIndex) => {
            const lastIndex = imagesPreview.length - 1;
            if (currentIndex >= lastIndex) return lastIndex;
            return currentIndex + 1;
        });
    };

    const prevImage = () => {
        setImageIndex((currentIndex) => {
            if (currentIndex <= 0) return 0;
            return currentIndex - 1;
        });
    };

    useEffect(() => {
        const listener = (e: globalThis.KeyboardEvent) => {
            if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') setIsOpen(false);
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
            e.preventDefault();
        };
        if (isOpen) {
            window.addEventListener('keydown', listener);
        }
        return () => window.removeEventListener('keydown', listener);
    }, [isOpen]);

    const handleOpenModal = (index: number) => () => {
        setImageIndex(index);
        setIsOpen(true);
    };

    return (
        <div className={styles.root}>
            {isOpen
                ? (
                    <div aria-modal>
                        <button
                            className={styles.imageModal}
                            type="button"
                            onClick={() => setIsOpen(false)}
                        >
                            <GatsbyImage
                                alt={title}
                                image={images[imageIndex].childImageSharp.gatsbyImageData}
                                objectFit="contain"
                            />
                        </button>
                        {hasNext ? <button className={styles.nextBtn} type="button" onClick={nextImage}>next</button> : null}
                        {hasPrev ? <button className={styles.prevBtn} type="button" onClick={prevImage}>prev</button> : null}
                    </div>
                )
                : null}
            <ul className={styles.imagesPreview}>
                {imagesPreview.map((image, index) => (
                    <li
                        className={styles.imageItem}
                        key={JSON.stringify(image)}
                    >
                        <button
                            aria-hidden={!isOpen}
                            aria-label="Modal window"
                            type="button"
                            onClick={handleOpenModal(index)}
                        >
                            <GatsbyImage alt={title} image={image.childImageSharp.gatsbyImageData} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductImages;
