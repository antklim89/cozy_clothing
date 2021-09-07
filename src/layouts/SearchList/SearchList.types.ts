import { IProductPreview } from '~/types';


export interface SearchListPropTypes {
  index: string
  query: string
  store: Record<string, IProductPreview>
}

