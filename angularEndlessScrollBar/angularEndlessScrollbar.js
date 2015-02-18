angular.module('angularEndlessScrollBar',[]).directive('angularEndlessScrollBar', function(){
    return {
        restrict: "A",
        replace: false,
        scope: false,
        link: function(scope, element, attrs){
            var $element = element[0]
                ,$option = scope.$eval(attrs.angularEndlessScrollBar)
                ,verTriggerPos = parseFloat($option.verScrollPos)/100
                ,horiTriggerPos = parseFloat($option.horiScrollPos)/100
                ,verHandler = scope.$eval($option.verHandler)
                ,horiHandler = scope.$eval($option.horiHandler);
            element.bind("scroll", function(event){
                if (($element.scrollTop + $element.offsetHeight) / $element.scrollHeight >= verTriggerPos ) {
                    if(verHandler != null){
                        verHandler(event);
                    }
                }
                if (($element.scrollLeft + $element.offsetWidth) / $element.scrollWidth >= horiTriggerPos ) {
                   if(horiHandler != null){
                       horiHandler(event);
                   }
                }
            })
        }
    }
})
