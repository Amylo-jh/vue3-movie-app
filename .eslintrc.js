module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        // vue
        //'plugin:vue/vue3-essential', //lv 1
        'plugin:vue/vue3-strongly-recommended', //lv2
        //'plugin:vue/vue3-recommended' //lv3
        // js
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'vue/html-self-closing': ['error', {
          html: {
            void: 'always',
            normal: 'never',
            component: 'always'
          },
          svg: 'always',
          math: 'always'
        }],
        'vue/html-closing-bracket-newline': ['error', {
          singleline: 'never',
          multiline: 'never'
        }]
      }
    }