/**
 * Created by Marko on 2/17/2015.
 */
markocen.controller("demoCtrl", function ($scope) {
            $scope.test = function (event) {
                console.log(event)
            }
            $scope.toggleResize = function () {
                $scope.ngPopupOption.resizable = !$scope.ngPopupOption.resizable;
            }
            $scope.toggleDrag = function () {
                $scope.ngPopupOption.draggable = !$scope.ngPopupOption.draggable;
            }
            $scope.toggleTitleBar = function () {
                $scope.ngPopupOption.hasTitleBar = !$scope.ngPopupOption.hasTitleBar;
            };
            $scope.toggleView = function () {
                $scope.ngPopupOption.isShow = !$scope.ngPopupOption.isShow;
            };
            $scope.msgList = [];
            $scope.insertEventMessage = function (msg) {
                $scope.msgList.push(msg)
            };
            $scope.popDialog = function (event) {
                $scope.ngPopupOptionDemo4.position.top = event.pageY;
                $scope.ngPopupOptionDemo4.position.left = event.pageX;
                $scope.ngPopupOptionDemo4.isShow = true;
            }
            $scope.ngPopupOption = {
                modelName: "myNgPopup",
                width: 400,
                height: 300,
                hasTitleBar:true,
                template: '<img src="http://www.omgubuntu.co.uk/wp-content/uploads/2014/03/Forever-Shady-S.jpg" style="width:100%;height:100%;">',
                title: "Awesome Dialog",
                resizable:true,
                draggable: true,
                position: { top : 250, left : 300},
                onOpen : function(){},
                onClose  : function(){},
                onDragStart : function(){},
                onDragEnd : function(){},
                onResize : function(){}
            }
            $scope.ngPopupOptionDemo2 = {
                modelName: "myNgPopup",
                width: 300,
                height: 300,
                hasTitleBar:true,
                template: '<img src="https://hungfu.files.wordpress.com/2014/01/field.jpg?w=500" style="width:100%;height:100%;">',
                title: "Awesome Dialog",
                resizable:true,
                draggable: true,
                position: { top : 250, left : 1300},
                onOpen : function(){$scope.insertEventMessage('Open Event Fired!')},
                onClose  : function(){$scope.insertEventMessage('Close Event Fired!')},
                onDragStart : function(){$scope.insertEventMessage('Drag Start Event Fired!')},
                onDragEnd : function(){$scope.insertEventMessage('Drag End Event Fired!')},
                onResize : function(){$scope.insertEventMessage('Resize Event Fired!')}
            }
            $scope.ngPopupOptionDemo3 = {
                modelName: "myNgPopup",
                width: 700,
                height: 500,
                hasTitleBar:true,
                template: '<iframe style="height:100%;width:100%;" src="https://www.youtube.com/embed/QSGNFLv9qtw?controls=1&showinfo=0&autoplay=1" frameborder="0"></iframe>',
                title: "Floating Video Player",
                resizable:true,
                draggable: true,
                position: { top : 950, left : 100}
            }
            $scope.ngPopupOptionDemo4 = {
                modelName: "myNgPopup",
                width: 350,
                height: 400,
                hasTitleBar:false,
                template: '<div class="thumbnail" style="height:91%;width:100%;"><img src="http://www.bacancytechnology.com/wp-content/uploads/2015/02/AngularJS-Flat-Icon-Vector.png"><div class="caption"><h4>ngPopup</h4><p>light weight Angular Dialog</p><p><a class="btn btn-primary" href="https://github.com/MarkoCen/ngPopup" role="button">Source</a> <a href="https://github.com/MarkoCen/ngPopup/wiki" class="btn btn-default" role="button">API</a></p></div></div>',
                title: "Floating Video Player",
                resizable:false,
                draggable: true,
                isShow:false,
                position: { top : 950, left : 100}
            }
        })
