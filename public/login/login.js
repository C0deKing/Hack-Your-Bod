app.controller("login", function ($scope, $location) {
    $scope.email = "";
    $scope.password = "";
    $scope.errorCode = "";
    $scope.errorMessage = "";
    $scope.login = function() {
    firebase.auth().signInWithEmailAndPassword($scope.email, $scope.password).catch(function(error) {
        $scope.errorCode = error.code;
        $scope.errorMessage = error.message;
        alert(errorMessage);
        });

        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
              $location.path( "/chat" );
          } else {
                $location.path( "/" );
          }
        });
  }

});
