module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    allowImportExportEverywhere: true,
  },
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
    'plugin:json/recommended',
    'plugin:xwalk/recommended', // keep using xwalk
  ],
  overrides: [
    {
      files: ['*.json'],
      rules: {
        'xwalk/max-cells': 'off', // disable only for JSON files
      },
    },
  ],
  rules: {
    'import/extensions': ['error', { js: 'always' }],
    'linebreak-style': ['error', 'unix'],
    'no-param-reassign': ['error', { props: false }],

    // Disabled rules
    'max-len': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'eqeqeq': 'off',
    'no-async-promise-executor': 'off',
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    'no-case-declarations': 'off',
    'xwalk/max-cells': 'off', // global fallback (optional)
  },
};
