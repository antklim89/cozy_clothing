import { IGatsbyImageData } from 'gatsby-plugin-image';

import type { aboutSchema } from '~/validation';

// export interface AboutPagePropTypes {
//     title: string;
//     body: string;
//     image: IGatsbyImageData;
//     chooseUs: Readonly<{
//         title: string
//         text: string
//         image: IGatsbyImageData
//     }[]>
// }

export type AboutPagePropTypes = ReturnType<typeof aboutSchema.validateSync>
