class NavbarController {
  constructor($scope, $localStorage, $rootScope, authService, $location) {
    "ngInject";
    this.name = 'navbar'
    this.scope = $scope
    this.localStorage = $localStorage
    this.rootScope = $rootScope
    this.location = $location
    this.authService = authService
    this.isConnected = this.localStorage.forwardtoken !== undefined
    this.activate($rootScope)
  }

  logout () {
    this.authService.logout()
    this.isConnected = false
    this.rootScope.$emit('logout')
    this.location.path('home')
  }

  isConnectedStatus() {
    return this.isConnected
  }

  activate () {
    this.rootScope.$on('login', () => {
      this.isConnected = true
    })
    this.rootScope.$on('logout', () => {
      this.isConnected = false
    })
  }
}

export default NavbarController
