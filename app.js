/**
 * Created by Marko on 2/17/2015.
 */
var markocen = angular.module('markocen', ['angularEndlessScrollBar','ngRoute']);

markocen.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/angularEndlessScrollBar', {
                templateUrl: 'angularEndlessScrollBar/angularEndlessScrollBarDemo.html',
                controller: 'angularEndlessDemoCtrl'
            }).
            otherwise({
                redirectTo: '/angularEndlessScrollBar'
            });
    }]);