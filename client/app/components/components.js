import angular from 'angular'
import Home from './home/home'
import Comments from './comments/comments'
import Pools from './pools/pools'
import Messages from './messages/messages'

const componentModule = angular.module('app.components', [
  Home,
  Comments,
  Pools,
  Messages
])

.name

export default componentModule
