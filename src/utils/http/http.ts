import axios from 'axios'
import { mergePublicParams, transformConfig } from '@/utils/http/request-handler'
import { handlerError, handlerSuccess } from '@/utils/http/reponse-handler'
import type { ApiRequestConfig, ResponseData } from '@/utils/http/types'
export function http<T = any>(config: ApiRequestConfig): Promise<ResponseData<T>> {
    //合并公用的请求参数，例如token、请求超时时间、请求地址
    const publicParams = mergePublicParams(config)
    //合并接口的请求参数
    const requestParams = transformConfig(publicParams)
    return axios(requestParams).then(
        (res) => {
            return handlerSuccess(res, config)
        },
        (err) => {
            return handlerError(err, config)
        },
    )
}
