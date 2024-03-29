module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'semi': ['error', 'never', {'beforeStatementContinuationChars': 'never'}],
    'vue/no-v-html':  'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 60,
        semi: false
      }
    ]
  }
}
