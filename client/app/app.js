import 'bootstrap-loader'
const $ = require('jquery')
window.jQuery = $

import angular from 'angular'
import 'ngstorage'
import 'angular-spinner'
import uiRouter from 'angular-ui-router'
import uiBootstrap from 'angular-ui-bootstrap'
import angularJwt from 'angular-jwt'
import Common from './common/common'
import Components from './components/components'
import AppComponent from './app.component'
import authFactory from './auth.factory'
import 'normalize.css'

angular.module('app', [
  'ngStorage',
  'angularSpinner',
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
    jwtOptionsProvider.config({
      whiteListedDomains: 'http://127.0.0.1:8000',
      tokenGetter: function Config($location, $localStorage, authService) {
        "ngInject";
        if (!authService.getToken()) $location.path('home')
        return $localStorage.forwardtoken
      }
    })
    $httpProvider.interceptors.push('jwtInterceptor')
  })
  .factory('authService', authFactory)
  .run(($rootScope, $location, $localStorage) => {
    "ngInject";
    $rootScope.$on('$locationChangeStart', () => {
      const publicPages = [ '/' ]
      const restrictedPage = publicPages.indexOf($location.path()) === -1
      if (restrictedPage && !$localStorage.forwardtoken) $location.path('home')
    })
  })
  .component('app', AppComponent)
