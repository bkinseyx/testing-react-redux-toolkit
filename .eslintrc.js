module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:sonarjs/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': ['off'],
    'sonarjs/cognitive-complexity': ['error', 8],
    'max-lines-per-function': ['error', 60],
    'prettier/prettier': ['off'],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-shadow': ['error', { builtinGlobals: true, hoist: 'all' }],
    eqeqeq: ['error', 'always'],
    'func-style': ['error', 'expression'],
    'react/prefer-stateless-function': ['error'],
  },
};
