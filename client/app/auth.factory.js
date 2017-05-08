/**
 * Created by carlen on 5/8/17.
 */
let authFactory = $http => {
  "ngInject";

  const login = () => new Promise((s, f) => {
    //$http.get('/api/pools').then(s).catch(f)
  })

  const logout = () => new Promise((s, f) => {
//    $http.get('/api/pools').then(s).catch(f)
  })

  return { login, logout }
}

export default authFactory

