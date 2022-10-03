import Params from '../model/params'

const DEFAULT_PARAMS: Params = {
  ignoreProtocol: false,
  ignorePort: true,
  ignorePath: false,
  ignoreQuery: true,
  ignoreFragment: true,
  ignoreUsernameAndPassword: true,
  ignoreTrailingSlash: false,
  toLowerCase: true
}

export default DEFAULT_PARAMS
