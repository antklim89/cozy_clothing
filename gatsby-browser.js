/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */


import '~/styles/reset.scss';
import '~/styles/global.scss';
import '~/styles/fonts.scss';
import { createElement } from 'react';

import { Layout } from '~/components';


export const wrapPageElement = ({ element, props }) => {
    return createElement(Layout, props, element);
};
