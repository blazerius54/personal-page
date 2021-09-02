module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'eslint:recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/self-closing-comp': ['warn',
            {
                component: true,
                html: true,
            },
        ],
        'react/prop-types': 0,
        'react/no-danger': 0,
        'react/jsx-no-target-blank': 0,
        'import/prefer-default-export': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'max-len': [1, 120],
    },
    parser: 'babel-eslint',
};
