import type { ResponseData, ApiRequestConfig, HttpsRequest } from '@/utils/http/types'
//重置操作
export function reset() {}
//请求成功
export function handlerSuccess(response: HttpsRequest, userConfig: ApiRequestConfig): Promise<ResponseData> {
    //根据自己需求进行判断，例如token过期后退出登录等
    return Promise.resolve(response.data)
}
//请求失败
export function handlerError(error: ResponseData, userConfig: ApiRequestConfig): Promise<ResponseData> {
    //提示错误信息
    return Promise.reject(error)
}
