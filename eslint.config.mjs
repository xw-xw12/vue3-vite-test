import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
const basicConfig = [
    {
        name: 'basicConfig',
        rules: {
            'prefer-const': 'warn', // const 变量
            'no-prototype-builtins': 'warn', // has对象属性
            'no-inner-declarations': 'warn', // 内联函数
        },
    },
]
const tsConfig = [
    {
        name: 'tsConfig',
        rules: {
            '@typescript-eslint/consistent-type-imports': 'error', //import type
            '@typescript-eslint/no-empty-object-type': 'off', //ts中允许空对象
            '@typescript-eslint/no-explicit-any': 'off', //ts中允许使用any
        },
    },
]
const vueConfig = [
    {
        name: 'vueConfig',
        rules: {
            'vue/no-mutating-props': 'warn', // 突变props
            'vue/return-in-computed-property': 'warn', // 计算属性 返回
            'vue/no-unused-vars': 'warn', // 变量没有使用
            'vue/no-unused-components': 'warn', // 组件注册了 但是未使用
            'vue/valid-template-root': 'off', // template 根节点 不提示
            'vue/require-v-for-key': 'warn', // v-for 必须有key
            'vue/multi-word-component-names': 'off', // 组件名 多单词 不提示
        },
    },
]
export default [
    {
        name: 'app/files-to-lint',
        files: ['**/*.{ts,mts,tsx,vue}'],
    },

    {
        name: 'app/files-to-ignore',
        ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
    },
    ...pluginVue.configs['flat/essential'],
    ...vueTsEslintConfig(),
    ...vueConfig,
    ...basicConfig,
    ...tsConfig,
    skipFormatting,
]
