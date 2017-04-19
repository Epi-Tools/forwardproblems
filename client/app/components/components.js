import angular from 'angular';
import Home from './home/home';
import Comments from './comments/comments';

let componentModule = angular.module('app.components', [
  Home,
  Comments
])

.name;

export default componentModule;
