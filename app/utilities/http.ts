import type { UseFetchOptions } from "nuxt/app"
import { defu } from "defu"

export default function http<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  const defaults: UseFetchOptions<T> = {
    // baseURL: config.public.baseURL ?? '',
    baseURL: "https://fakestoreapi.com/",
    key: url,
    // set user token if connected
    headers: {},
    server: false
  }

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults)

  return useFetch(url, params)
}
