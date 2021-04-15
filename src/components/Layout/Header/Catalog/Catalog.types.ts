

export interface CatalogPropTypes {
    linksClassName?: string
    activeLinksClassName?: string
}

export interface CatalogResponse {
    [k: string]: Array<{
        category: string
    }>
}

