

  app.controller("register",function($scope,$location) {
      $scope.height="";
      $scope.sex="";
      $scope.age="";
      $scope.initBodyWeight="";
      $scope.firstName="";
      $scope.lastName="";
      $scope.activity="";
      $scope.focus = "";
      $scope.BMR="-----";
      db.getUserInfo($scope);

      $scope.save = function() {
        var obj = {
          height: $scope.height,
          sex: $scope.sex,
          age: $scope.age,
          initBodyWeight: $scope.initBodyWeight,
          firstName: $scope.firstName,
          lastName: $scope.lastName,
          activity: $scope.activity,
          BMR: $scope.BMR,
          focus: $scope.focus
        }
        db.addUserInfo(obj);
      }
      $scope.BMRcalc = function(){
           var num = 0.0;
              if($scope.Sex=="Male"){
                  num = (66 + ($scope.initBodyWeight * 6.23) + (4.7 * $scope.height) -
                        (4.7 * $scope.age)) * parseFloat($scope.activity);
              }
              else{
                num = (66 + ($scope.initBodyWeight * 6.23) + (12.7 * $scope.height) -
                      (6.8 * $scope.age)) * parseFloat($scope.activity);

              }
         $scope.BMR = Math.round(num);
      }
      $scope.makeMale = function(){
          $scope.Sex="Male";

          $("#male").removeClass("btn-default");
          $("#female").removeClass("btn-primary");
          $("#male").addClass("btn-primary");
          $("#female").addClass("btn-default");

          }
      $scope.makeFemale = function(){
          $scope.Sex="Female";
          $("#female").removeClass("btn-default");
          $("#male").removeClass("btn-primary");
          $("#female").addClass("btn-primary");
          $("#male").addClass("btn-default");
      }



  });
