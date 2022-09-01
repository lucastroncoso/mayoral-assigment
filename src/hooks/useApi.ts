import useSWR, { SWRConfiguration, SWRResponse } from 'swr'

import { makeFetcher, FetcherConfig } from '../util/fetcher'

export type ApiError = Error & { code: number }

type ApiConfig = SWRConfiguration & FetcherConfig

interface UseApiHook {
  <O>(href: string, config?: ApiConfig): SWRResponse<O, ApiError>
}

export const useApi: UseApiHook = <O>(href: string, config?: ApiConfig) => {
  let { ignore, method, body, ...swrConfig } = config || {}
  return useSWR<O, ApiError>(href, {
    fetcher: makeFetcher({ ignore, method, body }),
    ...swrConfig,
  })
}
