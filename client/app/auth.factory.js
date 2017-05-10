/**
 * Created by carlen on 5/8/17.
 */
const authFactory = ($http, $localStorage) => {
  "ngInject";

  let user = {}

  const login = (login, password) => new Promise((s, f) => {
    $http.post('http://127.0.0.1:8000/login', { login, password }).then(data => {
      user.login = login
      user.acl = data.data.acl
      user.id = data.data.id
      user.token = data.data.token
      user.auth = true
      getToken()
      s(data)
    }).catch(f)
  })

  const logout = () => new Promise(s => {
    delete $localStorage.currentUser
    delete $localStorage.forwardtoken
    s()
  })

  const getToken = () => {
    if ($localStorage.currentUser !== undefined && $localStorage.forwardtoken !== undefined) {
      user = $localStorage.currentUser
      user.token = $localStorage.forwardtoken
      return true
    }
    if (user.auth) {
      $localStorage.currentUser = { username: user.login, acl: user.acl, id: user.id }
      $localStorage.forwardtoken = user.token
      return true
    }
    return false
  }

  const getUserId = () => $localStorage.currentUser.id

  return { login, logout, getToken, getUserId }
}

export default authFactory

