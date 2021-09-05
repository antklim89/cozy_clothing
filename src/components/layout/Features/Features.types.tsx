import { IGatsbyImage } from '~/types';


export interface IFeature {
    image: IGatsbyImage;
    text: string;
}

export interface FeaturesQuery {
    allFeatures: {
        nodes: IFeature[]
    }
}
