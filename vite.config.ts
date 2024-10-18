import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import path from 'path'
const envDir = 'env'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, envDir, '')
    const { VITE_REQUEST_DOMAIN_PREFIX, VITE_BASE_API } = env
    return {
        envDir: envDir,
        plugins: [
            vue({
                script: {
                    defineModel: true,
                },
            }),
            viteCompression(),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        server: {
            /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
            host: '0.0.0.0', // 默认为'127.0.0.1'，如果将此设置为`0.0.0.0`或者`true`将监听所有地址，包括局域网和公网地址
            port: 8080,
            /** 是否自动打开浏览器 */
            open: true,
            /** 设置是否允许跨域 */
            cors: true,
            /** 端口被占用时，是否直接退出 */
            strictPort: false,
            /** 接口代理 */
            proxy: {
                [VITE_BASE_API]: {
                    target: VITE_REQUEST_DOMAIN_PREFIX,
                    changeOrigin: true,
                },
            },
        },
        build: {
            target: 'ES2017',
        },
    }
})
