import { Dispatch, SetStateAction } from 'react';


export interface CatalogDrawerPropTypes {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

