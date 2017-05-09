import MessagesModule from './messages'
import MessagesController from './messages.controller';
import MessagesComponent from './messages.component';
import MessagesTemplate from './messages.html';

describe('Messages', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MessagesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MessagesController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(MessagesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MessagesComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MessagesTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MessagesController);
      });
  });
});
