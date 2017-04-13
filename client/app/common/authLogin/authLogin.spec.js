import AuthLoginModule from './authLogin'
import AuthLoginController from './authLogin.controller';
import AuthLoginComponent from './authLogin.component';
import AuthLoginTemplate from './authLogin.html';

describe('AuthLogin', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AuthLoginModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AuthLoginController(null, $rootScope);
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
    /*it('has name in template [REMOVE]', () => {
      expect(AuthLoginTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });*/
  });

  describe('Component', () => {
      // component/directive specs
      let component = AuthLoginComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AuthLoginTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AuthLoginController);
      });
  });
});
