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
    .when("/check-in", {
      templateUrl: "check-in/check-in.htm",
      controller: "check-in"
    })
    .when("/achievements", {
      templateUrl: "achievements/achievements.htm",
      controller: "achievement"
    })
    .when("/progress", {
      templateUrl: "progress/progress.htm",
      controller: "progress"
    })
    .when("signup", {
      templateUrl: "signup/signup.htm",
      controller: "signup"
    })

});
