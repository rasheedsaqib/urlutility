import Params from '../model/params'

const DEFAULT_PARAMS: Params = {
  ignoreProtocol: false,
  ignorePort: true,
  ignorePath: false,
  ignoreQuery: false,
  ignoreFragment: true,
  ignoreUsername: true,
  ignorePassword: true,
  ignoreTrailingSlash: false,
  ignoreCase: false
}

export default DEFAULT_PARAMS
