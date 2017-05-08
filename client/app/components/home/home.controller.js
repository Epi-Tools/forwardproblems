class HomeController {
  constructor($scope, $rootScope) {
    "ngInject";
    this.name = 'home'
    this.$rootScope = $rootScope
    this.activate($scope, $rootScope)
  }

  activate($scope, $rootScope) {
  }

  openModal() {
    console.log('openModal')
    this.$rootScope.$emit('openModal', {})
  }
}

export default HomeController;
