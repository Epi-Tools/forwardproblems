class AuthLoginController {
  constructor($scope, $rootScope, authService) {
    'ngInject';
    this.name = 'authLogin'
    this.id = '#login-modal'
    this.loginError = null
    this.authService = authService
    this.scope = $scope
    this.activate($scope, $rootScope)
  }

  static openModal (id) {
    $(id).modal('show')
  }

  static closeModal(id) {
    $(id).modal('hide')
  }

  getId () {
    return this.id
  }

  login (valid) {
    if (!valid) return
    this.authService.login(this.scope.login, this.scope.password).then(() => {
      AuthLoginController.closeModal(this.getId())
    }).catch(err => {
      this.loginError = err.data.message
      this.scope.$apply()
    })
  }

  activate($scope, $rootScope) {
    $rootScope.$on('openLoginModal', (event, arg) => {
      AuthLoginController.openModal(this.getId())
    })
  }
}

export default AuthLoginController
