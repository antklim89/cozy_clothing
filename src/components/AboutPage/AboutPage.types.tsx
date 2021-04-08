export interface AboutPagePropTypes {
    title: string;
    body: string;
    image: string;
    chooseUs: Readonly<{
        title?: string
        text?: string
        image?: string
    }[]>
}
