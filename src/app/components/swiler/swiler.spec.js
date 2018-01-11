import SwilerModule from './swiler';
import SwilerController from './swiler.controller';
import SwilerComponent from './swiler.component';
import SwilerTemplate from './swiler.html';

describe('Swiler', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SwilerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SwilerController();
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
      expect(SwilerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = SwilerComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(SwilerTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(SwilerController);
    });
  });
});
