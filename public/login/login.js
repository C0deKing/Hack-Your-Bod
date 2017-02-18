
app.controller("login", function ($scope, $location) {
    $scope.email = "";
    $scope.password = "";
    $scope.errorCode = "";
    $scope.errorMessage = "";
    $scope.logIn = function() {
    firebase.auth().signInWithEmailAndPassword($scope.email, $scope.password).catch(function(error) {
        $scope.errorCode = error.code;
        $scope.errorMessage = error.message;
        alert(errorMessage);
        });
    }

    $scope.register = function() {
       window.location = "#/signup";
    }




});
