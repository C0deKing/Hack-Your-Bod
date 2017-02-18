app.controller("register",function($scope,$location) {
    $scope.Height="";
    $scope.Sex="";
    $scope.age="";
    $scope.InitBodyWeight="";
    $scope.FirstName="";
    $scope.LastName="";
    $scope.activity="";
    $scope.BMR="-----"
    $scope.BMRcalc = function(){
         var BMR=0;
            if($scope.Sex=="Male"){
                BMR=((66+(13.75 *($scope.InitBodyWeight))+(5*$scope.Height))-(6.76*$scope.age))*$scope.activity;
            }
            else{
                 BMR=(655+(9.56 *($scope.InitBodyWeight)+1.85*($scope.Height)-4.68*($scope.age)))*$scope.activity;
            }
       $scope.BMR =  Math.round(BMR);
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
