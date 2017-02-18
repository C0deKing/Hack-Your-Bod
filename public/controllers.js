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

});
