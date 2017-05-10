import angular from 'angular';
import uiRouter from 'angular-ui-router';
import problemsComponent from './problems.component';

let problemsModule = angular.module('problems', [
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

.name;

export default problemsModule;
