

  app.controller("exercise",function($scope,$location){
    $scope.title = "";
    $scope.description = "";
    $scope.difficulty = "";
    $scope.weight = 0;
    $scope.records = [];
    $scope.key = "";
    $scope.date = new Date();
    db.getExercisePlan($scope);


    $scope.submit = function(){
      db.updateExercisePlan({
        title: $scope.title,
        description: $scope.description,
        difficulty: $scope.difficulty,
        weight: $scope.weight,
        date: new Date(),
        key: $scope.key
      });
      db.getExercisePlan($scope);
      $scope.reset();
      try{
        $scope.$digest();
      }catch(ex){
      }

    }
    $scope.reset = function() {
      $scope.title = "";
      $scope.description = "";
      $scope.difficulty = "";
      $scope.weight = 0;
      $scope.key = "";
      $scope.date = new Date();
    }
    $scope.loadRecord = function(x) {
      $scope.title = x.title;
      $scope.description = x.description;
      $scope.difficulty = x.difficulty;
      $scope.weight = x.weight;
      $scope.date = x.date;
      $scope.key = x.key;
      try{
        $scope.$digest();
      }catch(ex){
      }
    }
  });
