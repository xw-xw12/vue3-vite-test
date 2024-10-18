import { useAccountStore } from '@/stores/account'
import type { AxiosRequestConfig } from 'axios'
import { type ApiRequestConfig, RequestMethods } from '@/utils/http/types'
export interface HttpsRequestConfig extends AxiosRequestConfig {}
import { serialize } from 'object-to-formdata'
export function mergePublicParams(config: ApiRequestConfig): ApiRequestConfig {
    if (config.headers == null) {
        config.headers = {}
    }
    const accountStore = useAccountStore()
    const tokenValue = accountStore.tokenValue
    if (tokenValue) {
        config.headers[accountStore.tokenName] = tokenValue
    }
    const basePre = import.meta.env.VITE_BASE_API
    config.url = basePre + config.url
    config.timeout = config.timeout ?? 120000
    return config
}
export function transformConfig(config: ApiRequestConfig): AxiosRequestConfig {
    const { url, method, data, headers, timeout, responseType, formData } = config
    const res: HttpsRequestConfig = { url, method, headers, timeout, responseType }

    if ([RequestMethods.POST, RequestMethods.PUT, RequestMethods.PATCH].includes(method as RequestMethods)) {
        res.data = data ?? {}
    } else {
        res.params = { ...(data ?? {}) }
    }
    // formData转换
    if (formData) {
        res.transformRequest = [
            (data) => {
                const formData = serialize(data)
                return formData
            },
        ]
    }
    return res
}
