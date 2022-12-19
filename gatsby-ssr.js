import { createElement } from 'react';

import Layout from '~/layouts/Layout';


export const wrapPageElement = ({ element, props }) => {
    return createElement(Layout, props, element);
};
