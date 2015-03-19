markocen.controller("aboutMeCtrl", function($scope){
    $scope.blogHide = true;

    $scope.jumpToLinkedin = function(){
        window.open('http://www.linkedin.com/in/markocen')
    };

    $scope.jumpToGithub = function(){
        window.open('https://github.com/MarkoCen')
    };

    $scope.showAboutMe = function(){
        $scope.blogHide = true;
    };

    $scope.showBlog = function(){
        $scope.blogHide = false;
    };

})
