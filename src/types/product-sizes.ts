/* eslint-disable id-length */
export const Sizes = {
    XXL: 'XXL',
    XL: 'XL',
    L: 'L',
    M: 'M',
    S: 'S',
} as const;

export type Sizes = keyof typeof Sizes
