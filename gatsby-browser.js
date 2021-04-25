/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */


import '~/styles/reset.scss';
import '~/styles/global.scss';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/700-italic.css';
// import '@fortawesome/fontawesome-free/scss/regular.scss';
// import '@fortawesome/fontawesome-free/js/regular.min';
// import '@fortawesome/fontawesome-free/js/brands.min';
// import '@fortawesome/fontawesome-free/js/solid.min';
// import '@fortawesome/fontawesome-free/js/fontawesome.min';
import { createElement } from 'react';

import { Layout } from '~/components';


export const wrapPageElement = ({ element, props }) => {
    return createElement(Layout, props, element);
};
