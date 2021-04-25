/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import { createElement } from 'react';
// import '@fortawesome/fontawesome-free/js/solid.min';
// import '@fortawesome/fontawesome-free/js/fontawesome.min';

import { Layout } from '~/components';


export const wrapPageElement = ({ element, props }) => {
    return createElement(Layout, props, element);
};
