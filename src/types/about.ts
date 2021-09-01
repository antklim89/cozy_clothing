import { IGatsbyImage } from './image';


export interface IChooseUs {
    title: string;
    text: string;
    image: IGatsbyImage;
}

export interface IAbout {
    body: string
    title: string
    image: IGatsbyImage
    chooseUs: IChooseUs[]
}
