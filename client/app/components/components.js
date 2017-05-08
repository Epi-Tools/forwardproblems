import angular from 'angular';
import Home from './home/home';
import Comments from './comments/comments';
import Pools from './pools/pools';

const componentModule = angular.module('app.components', [
  Home,
  Comments,
  Pools
])

.name

export default componentModule
