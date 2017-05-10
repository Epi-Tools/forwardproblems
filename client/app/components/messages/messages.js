import angular from 'angular';
import uiRouter from 'angular-ui-router';
import messagesComponent from './messages.component';
import MessagesFactory from './messages.factory'

const messagesModule = angular.module('messages', [
  uiRouter
])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $stateProvider
      .state('messages', {
        url: '/messages',
        component: 'messages'
      })
  })

  .component('messages', messagesComponent)
  .factory('MessagesService', MessagesFactory)

.name

export default messagesModule
