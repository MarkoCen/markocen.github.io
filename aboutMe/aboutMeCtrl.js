markocen.controller("aboutMeCtrl", function($scope,$http){
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

    $http.get("https://api.mongolab.com/api/1/databases/blogdb/collections/myBlogs?f={'_id':1, 'title':1}&apiKey=CSTTdxhfL_M1gUdiwt6vI2FfIZ7Pz1jA").then(function(data){
        $scope.blogList = data.data;
    })

})
