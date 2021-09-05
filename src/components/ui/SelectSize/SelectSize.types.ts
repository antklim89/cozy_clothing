import { Sizes } from '~/types';


export interface SelectSizePropTypes {
    value: Sizes
    onChange: (arg: Sizes) => void
    label?: string
}

