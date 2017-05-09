class AuthLoginController {
  constructor ($scope, $rootScope, authService, usSpinnerService) {
    'ngInject';
    this.name = 'authLogin'
    this.id = '#login-modal'
    this.spinnerId = 'loginSpinner'
    this.loginError = null
    this.authService = authService
    this.usSpinnerService = usSpinnerService
    this.scope = $scope
    this.rootScope = $rootScope
    this.activate($scope, $rootScope)
  }

  static openModal (id) {
    $(id).modal('show')
  }

  static closeModal (id) {
    $(id).modal('hide')
  }

  getId () {
    return this.id
  }

  login (valid) {
    if (!valid) return
    this.usSpinnerService.spin(this.spinnerId)
    this.authService.login(this.scope.login, this.scope.password).then(() => {
      this.usSpinnerService.stop(this.spinnerId)
      AuthLoginController.closeModal(this.getId())
      this.rootScope.$on('login')
    }).catch(err => {
      this.loginError = err.data.message
      this.scope.$apply()
      this.usSpinnerService.stop(this.spinnerId)
    })
  }

  activate($scope, $rootScope) {
    $rootScope.$on('openLoginModal', () => {
      AuthLoginController.openModal(this.getId())
    })
  }
}

export default AuthLoginController
