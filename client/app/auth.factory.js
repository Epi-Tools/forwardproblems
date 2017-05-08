/**
 * Created by carlen on 5/8/17.
 */
const authFactory = ($http, $localStorage) => {
  "ngInject";

  const user = {}

  const login = (login, password) => new Promise((s, f) => {
    //$http.get('/api/pools').then(s).catch(f)
  })

  const logout = () => new Promise(s => {
    delete $localStorage.currentUser
    s()
  })

  const getToken = () => {
    if (user.auth) {
      if ($localStorage.currentUser === undefined) $localStorage.currentUser = { username: user.login, token: user.token }
      return true
    }
    return false
  }

  return { login, logout, getToken }
}

export default authFactory

