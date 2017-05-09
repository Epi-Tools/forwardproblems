import template from './messages.html';
import controller from './messages.controller';
import './messages.scss';

let messagesComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default messagesComponent;
