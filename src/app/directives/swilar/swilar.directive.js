import template from './swilar.html';
import controller from './swilar.controller';
import link from './swilar.postlink';
import './swilar.scss';

let swilarDirective = function () {
  return {
    restrict : "E",
    scope: {
      initialSlide: '@',
      speed: '@',
      spaceBetween: '@'
    },
    transclude: true,
    link: link ,
    bindToController: true,
    controllerAs: "ctrl",
    controller: controller,
    template: template
  };
};

export default swilarDirective;
