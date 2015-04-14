markocen.directive('blog', function($compile, $q, $http, $route){
    return {
        restrict: "E",
        scope: {
           blogList: "="
        },
        templateUrl: "aboutMe/blogView.html",
        replace:false,
        link: function(scope,element,attr){

            scope.blogTitle = "";
            scope.blogDate = "";
            scope.blogContent = "";
            scope.index = 0;
            scope.blogLength = 0;
            scope.disqusShow = false;
            scope.disqusUrl = "";
            scope.disqusIdentifier = "";

            var refreshDisqus = function (id, title) {
                scope.disqusUrl = "http://markocen.github.io/#/about-me/"+id+"/";
                scope.disqusIdentifier = title;
                scope.disqusShow = true;
            };

            var refreshBlog = function(title, date, content){
                scope.blogTitle = title;
                scope.blogDate = date;
                var content = $compile(content)(scope);
                var ele = element[0].querySelector(".blog-content");
                angular.element(ele).empty();
                angular.element(ele).append(content);
            };

            var getBlog = function(index){
                var deferred = $q.defer();
                var url = "https://api.mongolab.com/api/1/databases/blogdb/collections/myBlogs?q={'_id':'"+scope.blogList[index]._id+"'}&apiKey=CSTTdxhfL_M1gUdiwt6vI2FfIZ7Pz1jA";
                scope.disqusShow = false;
                $http.get(url).then(function(data){
                    deferred.resolve(data.data);
                },
                function(reason){
                    deferred.reject(reason);
                });

                return deferred.promise;
            };

            scope.nextBlog = function (newIndex) {
                scope.index = newIndex;
                getBlog(scope.index).then(function(data){
                    refreshBlog(data[0].title, data[0].time, data[0].content);
                    refreshDisqus(data[0]._id, data[0].title);
                });
            };

            scope.$watchCollection('blogList', function (newList) {
                if(newList){
                    if(newList.length > 0){
                        getBlog(scope.index).then(function(data){
                            refreshBlog(data[0].title, data[0].time, data[0].content);
                            refreshDisqus(data[0]._id, data[0].title);
                        });
                        scope.blogLength = newList.length;
                    }
                }
            })

        }
    }
})