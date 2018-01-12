import SwilarModule from './swilar';
import SwilarController from './swilar.controller';
import SwilarComponent from './swilar.directive';
import SwilarTemplate from './swilar.html';

describe('Swilar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SwilarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SwilarController();
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
      expect(SwilarTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = SwilarComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(SwilarTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(SwilarController);
    });
  });
});
