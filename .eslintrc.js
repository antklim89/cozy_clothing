/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

/**
npm i -D eslint eslint-config-next eslint-import-resolver-alias eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
 */


module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:all',
        'plugin:react/all',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jsx-a11y/strict',
        'plugin:@typescript-eslint/recommended',
        'next',
        'next/core-web-vitals',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'jsx-a11y',
    ],
    rules: {
        'import/prefer-default-export': 0,
        'import/extensions': 0,
        'import/newline-after-import': ['error', { count: 2 }],
        'import/order': [
            1, {
                'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
                'alphabetize': { order: 'asc', caseInsensitive: true },
            },
        ],
        'import/no-extraneous-dependencies': ['error', { devDependencies: ['*.js'] }],

        'react/no-multi-comp': [1, { 'ignoreStateless': true }],
        'react/jsx-no-useless-fragment': 0,
        'react/forbid-component-props': 0,
        'react/jsx-closing-bracket-location': 2,
        'react/jsx-no-bind': [0, { ignoreDOMComponents: true }],
        'react/jsx-no-literals': 0,
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'react/jsx-max-depth': [1, { max: 5 }],
        'react/jsx-newline': 0,
        'react/jsx-sort-props': [1, { callbacksLast: true, shorthandFirst: true }],
        'react/jsx-max-props-per-line': [1, { maximum: 3 }],
        'react/prop-types': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-indent': [1, 4],
        'react/jsx-indent-props': [1, 4],
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
        'react/jsx-no-duplicate-props': [2, { ignoreCase: false }],
        'react/react-in-jsx-scope': 0,
        'react/require-default-props': 0,
        'react/destructuring-assignment': 0,
        'react/no-this-in-sfc': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/display-name': 1,

        'react-hooks/exhaustive-deps': 0,

        'jsx-a11y/no-onchange': 0,
        'jsx-a11y/label-has-associated-control': 2,
        'jsx-a11y/label-has-for': 0,

        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-shadow': 2,
        '@typescript-eslint/no-unused-vars': [1, { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }],

        'new-cap': 0,
        'complexity': [1, 24],
        'capitalized-comments': 0,
        'multiline-comment-style': 0,
        'no-underscore-dangle': 0,
        'no-inline-comments': 0,
        'line-comment-position': 0,
        'multiline-ternary': [2, 'always-multiline'],
        'no-implicit-coercion': 2,
        'operator-linebreak': [2, 'before'],
        'dot-location': [2, 'property'],
        'require-unicode-regexp': 0,
        'max-lines-per-function': [2, 200],
        'max-statements': ['error', 20, { ignoreTopLevelFunctions: true }],
        'no-extra-parens': 0,
        'prefer-named-capture-group': 0,
        'id-length': [2, { exceptions: ['e', '_'] }],
        'no-ternary': 0,
        'curly': 0,
        'init-declarations': 0,
        'require-await': 0,
        'space-before-function-paren': 0,
        'func-style': [0, 'declaration', { allowArrowFunctions: true }],
        'sort-imports': 0,
        'one-var': 0,
        'padded-blocks': 0,
        'function-call-argument-newline': [2, 'consistent'],
        'no-magic-numbers': 0,
        'sort-keys': 0,
        'object-property-newline': 0,
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-loss-of-precision': 2,
        'object-curly-spacing': [2, 'always'],
        'no-use-before-define': [0, { functions: false, classes: true }],
        'no-shadow': 0,
        'no-undef': 0,
        'semi': 2,
        'comma-dangle': [1, 'always-multiline'],
        'quotes': [1, 'single'],
        'quote-props': [2, 'consistent'],
        'eol-last': 2,
        'no-useless-constructor': 0,
        'no-multiple-empty-lines': [1, { max: 2 }],
        'arrow-body-style': [0, 'as-needed'],
        'no-unused-vars': 0,
        'indent': [1, 4],
        'max-len': [1, { code: 120, ignoreComments: true, ignoreStrings: true }],
        'no-restricted-syntax': [2, 'WithStatement'],
        'camelcase': [1, { properties: 'never' }],
        'object-curly-newline': [1, { minProperties: 6, multiline: true }],
        'array-element-newline': [1, 'consistent'],
    },
    settings: {
        'react': {
            pragma: 'React',
            fragment: 'Fragment',
            version: 'detect',
        },
        'import/resolver': {
            alias: {
                map: [['~', path.join(__dirname, './')]],
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            },
        },
    },

    globals: {
        module: true,
        process: true,
        strapi: true,
        JSX: true,
    },

    ignorePatterns: ['**/node_modules/**/*', '**/.next/**/*', '**/build/**/*', '**/.tmp/**/*', '**/.cache/**/*', '**/cache/**/*', '**/public/**/*'],
};
