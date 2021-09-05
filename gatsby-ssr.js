/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import { createElement } from 'react';

import { Layout } from '~/components/layout/Layout';


export const wrapPageElement = ({ element, props }) => {
    return createElement(Layout, props, element);
};
