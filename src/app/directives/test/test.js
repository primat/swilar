import angular from 'angular';
import testDirective from './test.directive';

let testModule = angular.module('swilar')

  .directive('testDirective', testDirective)

  .name;

export default testModule;
