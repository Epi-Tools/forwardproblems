import angular from 'angular';
import Navbar from './navbar/navbar';
import User from './user/user';
import authLogin from './authLogin/authLogin';

let commonModule = angular.module('app.common', [
  Navbar,
  User,
  authLogin
])

.name;

export default commonModule;
