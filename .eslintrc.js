module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@babel/eslint-parser',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/function-component-definition': 'off',
    'react/prop-types': 'off',
    'no-eval': 'off',
    'react/no-array-index-key': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-undef': 'off',
    'spaced-comment': 'off',
    'import/no-unresolved': 'off',
    'one-var': 'off',
    'no-var': 'off',
    camelcase: 'off',
    'func-names': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/anchor-has-content': 'off',
  },
}
