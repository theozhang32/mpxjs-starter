import mpx from '@mpxjs/core'
import mpxFetch, { fetchOption } from '@mpxjs/fetch'
import { BusiResponse } from '@/apis/type'

mpx.use(mpxFetch)

type CustomFetchOptions = fetchOption & {
  // custom config
}

export const $request = <T>(options: CustomFetchOptions) =>
  mpx.xfetch.fetch<T>({
    ...options
    // defaultOptions
  })

mpx.xfetch.interceptors.request.use(
  (config: CustomFetchOptions) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

mpx.xfetch.interceptors.response.use(
  (res: { requestConfig: CustomFetchOptions; data: BusiResponse<any> }) => {
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default $request
