import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Swiler from './swiler/swiler';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Swiler
])

.name;

export default componentModule;
