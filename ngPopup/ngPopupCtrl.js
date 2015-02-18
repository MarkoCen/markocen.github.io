/**
 * Created by Marko on 2/17/2015.
 */
markocen.controller("ngPopupCtrl", function($scope){
    $scope.eventArray = [];
    $scope.windowCenter = {
        top: screen.height/2 -150,
        left : screen.width/2-150
    }
    $scope.config = {
        modelName:"myDialog",
        width: 300,
        height:300,
        templateUrl:"ngPopup/test.html",
        resizable:true,
        draggable:true,
        position: {top: screen.height/2 -300, left : screen.width/2-300},
        title:"ngPopup Dialog",
        hasTitleBar: true,
        isShow: true,
        onDragStart: function(){
            $scope.eventArray.unshift({title:'ngPopup dragging start !'})
        },
        onDragEnd: function(){
            $scope.eventArray.unshift({title:'ngPopup dragging end !'})
        },
        onResize: function(){
            $scope.eventArray.unshift({title:'ngPopup resizing !'})
            console.log('resize')
        },
        onOpen: function () {
            $scope.eventArray.unshift({title:'ngPopup is opened !'})
        },
        onClose:function(){
            $scope.eventArray.unshift({title:'ngPopup is closed !'})
        }
    }

})