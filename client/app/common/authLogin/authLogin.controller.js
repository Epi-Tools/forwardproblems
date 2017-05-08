class AuthLoginController {
  constructor($scope, $rootScope, authService) {
    'ngInject';
    this.name = 'authLogin'
    this.id = '#login-modal'
    this.loginError = null
    this.authService = authService
    this.activate($scope, $rootScope)
  }

  openModal (id) {
    $(id).modal('show')
  }

  closeModal(id) {
    $(id).modal('hide')
  }

  getId () {
    return this.id
  }

  login (valid) {
    if (!valid) return
  }

  activate($scope, $rootScope) {
    $rootScope.$on('openLoginModal', (event, arg) => {
      this.openModal(this.getId())
    })
  }
}

export default AuthLoginController
