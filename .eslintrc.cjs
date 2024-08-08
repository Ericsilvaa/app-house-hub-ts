module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier', // Adiciona Prettier
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [
    'react-refresh',
    'simple-import-sort',
    'react',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'quotes': ['error', 'single', { avoidEscape: true }],
    'camelcase': 'off',
    'semi': ['error', 'never'],
    'max-len': 'off',
    'comma-dangle': 'off',
    'react/prop-types': 'off',
    'react-refresh/only-export-components': 'off',
    'react/no-unescaped-entities': 'off',
    'no-unused-vars': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // External packages come first
          ['^@?\\w'],
          // Internal files
          ['^@/'],
          // Colocated files
          ['^\\.\\./', '^\\./'],
          // Style imports
          ['^.+\\.?(css)$'],
        ],
      },
    ],
  },
};
