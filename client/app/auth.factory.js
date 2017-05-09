/**
 * Created by carlen on 5/8/17.
 */
const authFactory = ($http, $localStorage) => {
  "ngInject";

  const user = {}

  const login = (login, password) => new Promise((s, f) => {
    $http.post('http://127.0.0.1:8000/login', { login, password }).then(data => {
      user.login = login
      user.acl = data.data.acl
      user.id = data.data.id
      user.token = data.data.token
      user.auth = true
      s(data)
    }).catch(f)
  })

  const logout = () => new Promise(s => {
    delete $localStorage.currentUser
    delete $localStorage.forwardtoken
    s()
  })

  const getToken = () => {
    if (user.auth) {
      $localStorage.currentUser = { username: user.login, acl: user.acl, id: user.id }
      if ($localStorage.forwardtoken === undefined) {
        $localStorage.forwardtoken= user.token
      }
      return true
    }
    return false
  }

  const getUserId = () => $localStorage.currentUser.id

  return { login, logout, getToken, getUserId }
}

export default authFactory

