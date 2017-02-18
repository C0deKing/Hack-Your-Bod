;
//Controller for exercise
app.controller("exercise",
var fun = function($scope,$location){
  $scope.title = "";
  $scope.description = "";
  $scope.difficulty = "";
  $scope.weight = 0;
  $scope.records = [];

  $scope.choose = function(choice){
      $scope.difficulty = choice;
  }
  $scope.submit = function(){

  }
});
