


  app.controller("signup",function($scope,$location){

      $scope.email="";
      $scope.password="";
      $scope.newpassword="";
      $scope.saveRegister=  function() {

          if($scope.password == $scope.newpassword){

                  firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password).catch(function(error) {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  // ...
              });
          }
          else{

              $("#Error").modal();

          }
      }

  });
