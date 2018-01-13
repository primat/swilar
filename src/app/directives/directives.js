import angular from 'angular';
import Swilar from './swilar/swilar';
import TestDirective from './test/test';

let directiveModule = angular.module('app.directives', [
  Swilar

])

  .name;

export default directiveModule;
