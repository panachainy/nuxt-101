module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    // 'prettier/@typescript-eslint',
    // 'prettier',
    'plugin:prettier/recommended',
  ],
}
