import angular from 'angular';
import uiRouter from 'angular-ui-router';
import commentsComponent from './comments.component';

let commentsModule = angular.module('comments', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('comments', {
      url: '/comments',
      component: 'comments'
    });
})

.component('comments', commentsComponent)

.name;

export default commentsModule;
