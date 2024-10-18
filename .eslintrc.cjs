module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting',
    ],
    rules: {
        '@typescript-eslint/consistent-type-imports': 'error', //import type
        '@typescript-eslint/no-explicit-any': 'off', //ts中允许使用any
        'no-inner-declarations': 'warn', // 内联函数
        'vue/no-mutating-props': 'warn', // 突变props
        'no-prototype-builtins': 'warn', // has对象属性
        'vue/return-in-computed-property': 'warn', // 计算属性 返回
        'vue/no-unused-vars': 'warn', // 变量没有使用
        'vue/no-unused-components': 'warn', // 组件注册了 但是未使用
        'prefer-const': 'warn', // const 变量
        'vue/valid-template-root': 'off', // template 根节点 不提示
        'vue/require-v-for-key': 'warn', // v-for 必须有key
        'vue/multi-word-component-names': 'off', // 组件名 多单词 不提示
    },
    parserOptions: {
        ecmaVersion: 'latest',
    },
}
