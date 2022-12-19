import '~/styles/reset.scss';
import '~/styles/global.scss';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/700-italic.css';
import { createElement } from 'react';

import Layout from '~/layouts/Layout';


export const wrapPageElement = ({ element, props }) => {
    return createElement(Layout, props, element);
};
