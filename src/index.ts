import Params from './model/params'
import DEFAULT_PARAMS from './lib/default-params'

class UrlUtility {
  private readonly ignoreProtocol: boolean
  private readonly ignorePort: boolean
  private readonly ignorePath: boolean
  private readonly ignoreQuery: boolean
  private readonly ignoreFragment: boolean
  private readonly ignoreUsernameAndPassword: boolean
  private readonly ignoreTrailingSlash: boolean
  private readonly toLowerCase: boolean

  constructor (params?: Params) {
    if (params === undefined) {
      params = DEFAULT_PARAMS
    }

    this.ignoreProtocol = params.ignoreProtocol ?? false
    this.ignorePort = params.ignorePort ?? true
    this.ignorePath = params.ignorePath ?? false
    this.ignoreQuery = params.ignoreQuery ?? false
    this.ignoreFragment = params.ignoreFragment ?? true
    this.ignoreUsernameAndPassword = params.ignoreUsernameAndPassword ?? true
    this.ignoreTrailingSlash = params.ignoreTrailingSlash ?? false
    this.toLowerCase = params.toLowerCase ?? false
  }

  public parse (url: string): string {
    if (this.toLowerCase) {
      url = url.toLowerCase()
    }

    if (this.ignoreProtocol) {
      url = url.replace(/(^\w+:|^)\/\//, '')
    }

    if (this.ignoreUsernameAndPassword) {
      url = url.replace(/\/\/[^/]+@/, '//')
    }

    if (this.ignorePort) {
      url = url.replace(/:\d+/, '')
    }

    if (this.ignorePath) {
      url = url.split('/')[0] + '//' + url.split('/')[2]
    }

    if (this.ignoreQuery) {
      url = url.replace(/\?[^#]*/, '')
    }

    if (this.ignoreFragment) {
      url = url.replace(/#.*$/, '')
    }

    if (this.ignoreTrailingSlash) {
      url = url.replace(/\/$/, '')
    }

    return url
  }

  public compare (url1: string, url2: string): boolean {
    return this.parse(url1) === this.parse(url2)
  }
}

export default UrlUtility
