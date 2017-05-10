import angular from 'angular'
import Home from './home/home'
import Comments from './comments/comments'
import Pools from './pools/pools'
import Messages from './messages/messages'
import Problems from './problems/problems';

const componentModule = angular.module('app.components', [
  Home,
  Comments,
  Pools,
  Problems,
  Messages
])

.name

export default componentModule
