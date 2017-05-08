import angular from 'angular';
import uiRouter from 'angular-ui-router';
import commentsComponent from './comments.component';
import CommentFactory from './comments.factory';


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

  .factory('CommentsService', CommentFactory)


  .name;

export default commentsModule;
