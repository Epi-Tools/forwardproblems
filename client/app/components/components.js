<<<<<<< HEAD
import angular from 'angular';
import Home from './home/home';
import Comments from './comments/comments';
import Pools from './pools/pools';
import Problems from './problems/problems';
=======
import angular from 'angular'
import Home from './home/home'
import Comments from './comments/comments'
import Pools from './pools/pools'
import Messages from './messages/messages'
>>>>>>> 26a1730b472a50a7543e4f0bb4d9f9dcf32ba96c

const componentModule = angular.module('app.components', [
  Home,
  Comments,
  Pools,
<<<<<<< HEAD
  Problems
=======
  Messages
>>>>>>> 26a1730b472a50a7543e4f0bb4d9f9dcf32ba96c
])

.name

export default componentModule
