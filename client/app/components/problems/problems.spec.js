import ProblemsModule from './problems'
import ProblemsController from './problems.controller';
import ProblemsComponent from './problems.component';
import ProblemsTemplate from './problems.html';

describe('Problems', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProblemsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProblemsController();
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
      expect(ProblemsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ProblemsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ProblemsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ProblemsController);
      });
  });
});
