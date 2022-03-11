
export interface IHero {
    title: string
    body: string
    image: {
        childImageSharp: {
            fluid: {
                srcWebp: string
            }
        }
    }
}
