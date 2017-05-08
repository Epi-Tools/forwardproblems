import 'bootstrap-loader'
const $ = require('jquery')
window.jQuery = $

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import uiBootstrap from 'angular-ui-bootstrap'
import angularJwt from 'angular-jwt'
import Common from './common/common'
import Components from './components/components'
import AppComponent from './app.component'
import authFactory from './auth.factory'
import 'normalize.css'

angular.module('app', [
  uiRouter,
  uiBootstrap,
  angularJwt,
  Common,
  Components
])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true)
  })
  .config(($httpProvider, jwtOptionsProvider) => {
    "ngInject";
    // Please note we're annotating the function so that the $injector works when the file is minified
    jwtOptionsProvider.config({
      tokenGetter: ['authService', function(authService) {
        authService.getToken()
        consone.log(localStorage.getItem('id_token'))
        return localStorage.getItem('id_token')
      }]
    });

    $httpProvider.interceptors.push('jwtInterceptor')
  })
  .factory('authService', authFactory)


  .component('app', AppComponent)
