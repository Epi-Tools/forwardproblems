import angular from 'angular'
import uiRouter from 'angular-ui-router'
import problemsComponent from './problems.component'
import ProblemsFactory from './problems.factory'

const problemsModule = angular.module('problems', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $stateProvider
      .state('problems', {
        url: '/problems',
        component: 'problems'
      })
  })

  .component('problems', problemsComponent)
  .factory('ProblemsService', ProblemsFactory)
  .name

export default problemsModule
