import { createElement } from 'react';

import Layout from '~/layouts/Layout';


export const wrapPageElement = ({ element, props }) => {
    return createElement(Layout, props, element);
};

export const onRenderBody = ({ setHtmlAttributes }) => {
    setHtmlAttributes({ lang: 'en' });
};
