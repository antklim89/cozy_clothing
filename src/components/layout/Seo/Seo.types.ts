

export interface SeoProps {
    description?: string;
    meta?: {
        name: string;
        content: string;
    }[];
    title: string;
    keywords?: string[]
}

export interface SeoQuery {
    info: {
        title: string
        description: string
        author: string
    }
}
