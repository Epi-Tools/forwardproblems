import angular from 'angular'
import uiRouter from 'angular-ui-router'
import poolsComponent from './pools.component'
import PoolsFactory from './pools.factory'

let poolsModule = angular.module('pools', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $stateProvider
      .state('pools', {
        url: '/pools',
        component: 'pools'
      })
  })

  .component('pools', poolsComponent)
  .factory('PoolsService', PoolsFactory)
.name

export default poolsModule
