const { getESLintConfig } = require('@iceworks/spec');

module.exports = getESLintConfig('react-ts', {
  rules: {
    'react/jsx-filename-extension': 0,
    '@typescript-eslint/explicit-function-return-type': 0,

    'no-unused-vars': 2,
    '@typescript-eslint/semi': [2, 'always'],

    '@iceworks/best-practices/no-js-in-ts-project': 0,
    //
    '@typescript-eslint/indent': 0,
    'prefer-arrow-callback': 0,
  },
});
