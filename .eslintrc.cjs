module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import', 'react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'no-unused-vars': 'warn',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': ['off', { target: 'single' }],
  },
};
