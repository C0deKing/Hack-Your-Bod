app = angular.module("app",  ["ngRoute"]);
getDB();
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "login/login.htm",
        controller: "login"
    })
    .when("/chat", {
      templateUrl: "chat/chat.htm",
      controller: "chat"
    })
    .when("/about", {
      templateUrl: "about/about.htm",
      controller: "about"
    })
    .when("/profile", {
      templateUrl: "Register/register.htm",
      controller: "register"
    })

});


angular.module('chat').directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.ngEnter, {'event': event});
                    });

                    event.preventDefault();
                }
            });
        };
    });
