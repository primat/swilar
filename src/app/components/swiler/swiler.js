import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import swilerComponent from './swiler.component';

let swilerModule = angular.module('swiler', [
  uiRouter
])

.component('swiler', swilerComponent)

.name;

export default swilerModule;
