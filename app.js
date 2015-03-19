/**
 * Created by Marko on 2/17/2015.
 */
var markocen = angular.module('markocen', ['angularEndlessScrollBar','ngRoute','uiSlider','ngPopup']);

markocen.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/angularEndlessScrollBar', {
                templateUrl: 'angularEndlessScrollBar/angularEndlessScrollBarDemo.html',
                controller: 'angularEndlessDemoCtrl'
            }).
            when('/ngPopup', {
                templateUrl: 'ngPopup/ngPopupDemo.html',
                controller: 'ngPopupCtrl'
            }).
            when('/colorful-buttons', {
                templateUrl: 'colorful-buttons/demo.html',
                controller: 'colorBtnCtrl'
            }).
            when('/about-me', {
                templateUrl: 'aboutMe/about-me.html',
                controller: 'aboutMeCtrl'
            }).
            otherwise({
                redirectTo: '/about-me'
            });
    }]);