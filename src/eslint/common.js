import js from '@eslint/js';
import ts from 'typescript-eslint';
import jest from 'eslint-plugin-jest';
import sonarjs from 'eslint-plugin-sonarjs';
import unusedImports from 'eslint-plugin-unused-imports';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';

export default [
    // Configuration for Javascript rules
    js.configs.recommended,

    // Configuration for Typescript rules
    ...ts.configs.recommended,

    // Configuration for Jest
    {
        files: ['__tests__/**'],
        ...jest.configs['flat/recommended'],
    },

    // Configuration for SonarJS
    {
        ...sonarjs.configs.recommended,
        plugins: {
            sonarjs: sonarjs,
        },
    },

    // Custom rules for imports and variables
    {
        plugins: {
            'unused-imports': unusedImports,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            '@typescript-eslint/no-unused-vars': 'off',
            'sort-vars': 'error',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        // External packages
                        ['^react', '^@?\\w'],

                        // Internal architecture.
                        ['^@configuration(/.*|$)', '/configuration(?!/?$)', '/configuration/?$'],
                        ['^@application(/.*|$)', '/application(?!/?$)', '/application/?$'],
                        ['^@domain(/.*|$)', '/domain(?!/?$)', '/domain/?$'],
                        ['^@ports(/.*|$)', '/ports(?!/?$)', '/ports/?$'],
                        ['^@adapters(/.*|$)', '/adapters(?!/?$)', '/adapters/?$'],
                        ['^@infrastructure(/.*|$)', '/infrastructure(?!/?$)', '/infrastructure/?$'],
                        ['^@utils(/.*|$)', '/utils(?!/?$)', '/utils/?$'],

                        // Parent imports. Put `..` last.
                        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                        // Other relative imports. Put same-folder imports and `.` last.
                        ['^\\./(?=.*/)(?!/?$)', '^\\\\.(?!/?$)", "^\\\\./?$'],
                        // Style imports.
                        ['^.+\\.?(css)$'],
                    ],
                },
            ],
        },
    },

    // Custom rules for sorting keys in objects
    {
        plugins: {
            'sort-keys-fix': sortKeysFix,
        },
        rules: {
            'sort-keys-fix/sort-keys-fix': 'warn',
        },
    },
];
