class AuthLoginController {
  constructor($scope, $rootScope) {
    'ngInject';
    this.name = 'authLogin'
    this.id = '#authLogin'
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

  activate($scope, $rootScope) {
    $rootScope.$on('openModal', (event, arg) => {
      this.openModal(this.getId())
    })
  }
}

export default AuthLoginController
