module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'comma-dangle': [
            2,
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                functions: 'ignore',
            },
        ],
        indent: [2, 4],
        'linebreak-style': [2, 'unix'],
        quotes: [2, 'single'],
        semi: [2, 'always'],
        'brace-style': [2, '1tbs'],
        'array-bracket-spacing': [2, 'never'],
        camelcase: [
            2,
            {
                properties: 'always',
            },
        ],
        'one-var': [2, 'never'],
        'keyword-spacing': [2],
        'no-trailing-spaces': [2],
        'no-unused-vars': [1],
        'no-irregular-whitespace': [
            2,
            {
                skipComments: true,
                skipRegExps: true,
            },
        ],
        'no-plusplus': [
            2,
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: [
                    'acc',
                    'e',
                    'ctx',
                    'req',
                    'request',
                    'res',
                    'response',
                    '$scope',
                    'state',
                    'el',
                ],
            },
        ],
        'no-console': [0],
    },
};
