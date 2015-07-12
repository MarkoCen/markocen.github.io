/**
 * Created by Marko on 2/17/2015.
 */

angular.module('angularEndless', ['angularEndlessScrollBar']).controller("angularEndlessDemoCtrl", function($scope, $http, $timeout){
    $scope.contactList = [];
    $scope.contactListHori = [];
    $scope.JsonLoading = false;
    $scope.JsonLoadingHori = false;
    $scope.loadJson = function(){
        $scope.JsonLoading = true;

        $http.get("http://www.json-generator.com/api/json/get/ccwUUBoJiW?indent=2").then(function(json){
            $timeout(function(){
                $scope.contactList = $scope.contactList.concat(json.data);
                $scope.JsonLoading = false;
            },1500)
        })
    }
    $scope.loadJsonHori = function(){
        $scope.JsonLoadingHori = true;

        $http.get("http://www.json-generator.com/api/json/get/ccwUUBoJiW?indent=2").then(function(json){
            $timeout(function(){
                $scope.contactListHori = $scope.contactListHori.concat(json.data);
                $scope.JsonLoadingHori = false;
            },1500)
        })
    }
    $scope.loadJson();
    $scope.loadJsonHori();
    $scope.showPopover = function(){

    }
    $scope.option = {verScrollPos:'100%', verHandler:'loadJson', horiHandler:'', horiScrollPos: '100%'}
    $scope.optionHori = {verScrollPos:'100%', verHandler:'', horiHandler:'loadJsonHori', horiScrollPos: '100%'}
})