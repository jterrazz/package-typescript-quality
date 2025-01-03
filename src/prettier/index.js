export default {
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    tabWidth: 4,
    useTabs: false,
    printWidth: 100,
    overrides: [
        {
            files: ['*.json', '*.yml', '*.yaml', '*.md'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
