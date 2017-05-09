class PoolsController {
  constructor($location, $localStorage, PoolsService, $scope, authService) {
    "ngInject";
    this.name = 'pools'
    this.id = '#modalAdd'
    this.location = $location
    this.localStorage = $localStorage
    this.PoolsService = PoolsService
    this.authService = authService
    this.scope = $scope
    this.pools = null
    this.addError = null
    this.activate()
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

  openAdd() {
    this.addError = ''
    PoolsController.openModal(this.id)
  }

  add(valid) {
    if (!valid) return
    console.log(this.localStorage.currentUser)
    this.PoolsService.postPools(this.scope.name, this.localStorage.currentUser.id).then(() => {
      this.addError = null
      PoolsController.closeModal(this.id)
      this.PoolsService.getPools().then(data => {
        this.pools = data
        this.scope.$apply()
      }).catch(console.error)
    }).catch(() => {
      this.addError = 'Post Error'
    })
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
