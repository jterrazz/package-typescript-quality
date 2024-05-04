import globals from 'globals';
import commonConfig from './common.js';

export default [
    ...commonConfig,
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
];
