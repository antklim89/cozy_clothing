

export interface CatalogPropTypes {
    linksClassName?: string
    activeLinksClassName?: string
}


export interface CatalogResponse {
    types: string[]
    categories: Array<{
        type: string
        name: string
    }>
}

