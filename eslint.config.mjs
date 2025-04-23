// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'indent': ['error', 2],
    // 'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    '@typescript-eslint/no-explicit-any': 'off',
    "vue/no-unused-properties": "off",
    "vue/require-default-prop": "off",
    'comma-dangle': ['error', 'never']
  },
  ignores: [
    'node_modules/',
    'dist/',
    '.nuxt/',
    '*.min.js'
  ]
})
