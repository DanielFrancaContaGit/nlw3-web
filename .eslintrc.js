module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'tsx'] }],
    'react/style-prop-object': [0],
    'import/extensions': [0],
    'import/no-unresolved': [0],
    'max-len': [0],
    'react/prop-types': [0],
    'linebreak-style': [0],
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
    camelcase: [2, { ignoreImports: true, properties: 'never' }],
  },
};
