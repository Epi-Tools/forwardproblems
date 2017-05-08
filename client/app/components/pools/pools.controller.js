class PoolsController {
  constructor($location, $localStorage, PoolsService, $scope) {
    "ngInject";
    this.name = 'pools'
    this.location = $location
    this.localStorage = $localStorage
    this.PoolsService = PoolsService
    this.scope = $scope
    this.pools = null
    this.activate()
  }

  activate() {
    if (this.localStorage.currentUser.acl !== 1) {
      this.location.path('home')
      return
    }
    this.PoolsService.getPools().then(data => {
      this.pools = data
      this.scope.$apply()
    }).catch(console.error)
  }
}

export default PoolsController;
