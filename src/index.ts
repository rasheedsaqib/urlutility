import Params from './model/params'
import DEFAULT_PARAMS from './lib/default-params'

class UrlUtility {
  private readonly ignoreProtocol: boolean
  private readonly ignorePort: boolean
  private readonly ignorePath: boolean
  private readonly ignoreQuery: boolean
  private readonly ignoreFragment: boolean
  private readonly ignoreUsername: boolean
  private readonly ignorePassword: boolean
  private readonly ignoreTrailingSlash: boolean
  private readonly ignoreCase: boolean

  constructor (params?: Params) {
    if (params === undefined) {
      params = DEFAULT_PARAMS
    }

    this.ignoreProtocol = params.ignoreProtocol ?? false
    this.ignorePort = params.ignorePort ?? true
    this.ignorePath = params.ignorePath ?? false
    this.ignoreQuery = params.ignoreQuery ?? false
    this.ignoreFragment = params.ignoreFragment ?? true
    this.ignoreUsername = params.ignoreUsername ?? true
    this.ignorePassword = params.ignorePassword ?? true
    this.ignoreTrailingSlash = params.ignoreTrailingSlash ?? false
    this.ignoreCase = params.ignoreCase ?? false
  }

  public parse (url: string): string {
    if (this.ignoreCase) {
      url = url.toLowerCase()
    }

    if (this.ignoreProtocol) {
      url = url.replace(/(^\w+:|^)\/\//, '')
    }

    if (this.ignoreUsername) {
      url = url.replace(/\/\/[^/]+@/, '//')
    }

    if (this.ignorePassword) {
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
