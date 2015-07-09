/**
 * Created by Marko on 2/17/2015.
 */
var markocen = angular.module('markocen', ['angularEndlessScrollBar','ngRoute','ngPopup']);

markocen.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/angularEndlessScrollBar', {
            templateUrl: 'angularEndlessScrollBar/angularEndlessScrollBarDemo.html',
            controller: 'angularEndlessDemoCtrl'
        }).
        when('/ngPopup', {
            templateUrl: 'ngPopup/ngPopupDemo.html',
            controller: 'demoCtrl'
        }).
        when('/colorful-buttons', {
            templateUrl: 'colorful-buttons/demo.html',
            controller: 'colorBtnCtrl'
        }).
        when('/about-me/:name?', {
            templateUrl: 'aboutMe/about-me.html',
            controller: 'aboutMeCtrl'
        }).
        otherwise({
            redirectTo: '/about-me'
        });

    $locationProvider.html5Mode(true);

    //$locationProvider.hashPrefix('!')
}]);
