myApp.directive('profileInfoDirective',
    function() {
        return {
            restrict: 'E',
            scope: {
                info: '='
            },
            templateUrl: 'views/profileInfo.html',
            controller: 'IndexController'
        }
    }
);
