class HomeController {
  constructor($scope, $rootScope, $localStorage) {
    "ngInject";
    this.name = 'home'
    this.rootScope = $rootScope
    this.scope = $scope
    this.localStorage = $localStorage
    this.activate($scope, $rootScope)
    this.isConnected = this.localStorage.forwardtoken === undefined
    this.activate($scope, $rootScope)
  }

  activate($scope, $rootScope) {
    $rootScope.$on('login', () => {
      this.isConnected = false
      this.scope.$apply()
    })
  }

  openModal() {
    this.rootScope.$emit('openLoginModal', {})
  }
}

export default HomeController;
