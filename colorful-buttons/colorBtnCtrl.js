/**
 * Created by Marko on 3/12/2015.
 */
markocen.controller('colorBtnCtrl', function($scope,$location){
    $(function () {
        setTimeout(function () {
            $(".cb-green").animate({
                top: '30vh'
            })
        }, 100)
        setTimeout(function () {
            $(".cb-red").animate({
                top: '30vh'
            })
        }, 200)
        setTimeout(function () {
            $(".cb-blue").animate({
                top: '30vh'
            })
        }, 300)
        setTimeout(function () {
            $(".cb-yellow").animate({
                top: '30vh'
            })
        }, 400)
    })

    $scope.openUrl = function(){
        window.open('https://github.com/MarkoCen/colorful-buttons')
    }
})