import angular from 'angular';
import uiRouter from 'angular-ui-router';
import authLoginComponent from './authLogin.component';

let authLoginModule = angular.module('authLogin', [
  uiRouter
])

.component('authLogin', authLoginComponent)

.name;

export default authLoginModule;
