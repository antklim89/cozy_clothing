import { IProductPreview } from '~/types';


export interface SearchPropTypes {
  index: string
  query: string
  store: Record<string, IProductPreview>
}

