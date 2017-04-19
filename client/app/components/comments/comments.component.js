import template from './comments.html';
import controller from './comments.controller';
import './comments.scss';

let commentsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default commentsComponent;
