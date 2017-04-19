import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Comments from './comments/comments';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Comments
])

.name;

export default componentModule;
