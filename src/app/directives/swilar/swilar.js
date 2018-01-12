import angular from 'angular';
import swilarDirective from './swilar.directive';

let swilarModule = angular.module('swilar', [])

  .directive('swilar', swilarDirective)

  .name;

export default swilarModule;
