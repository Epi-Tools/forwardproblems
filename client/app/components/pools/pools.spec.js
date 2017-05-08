import PoolsModule from './pools'
import PoolsController from './pools.controller';
import PoolsComponent from './pools.component';
import PoolsTemplate from './pools.html';

describe('Pools', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PoolsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PoolsController();
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
      expect(PoolsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PoolsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PoolsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PoolsController);
      });
  });
});
