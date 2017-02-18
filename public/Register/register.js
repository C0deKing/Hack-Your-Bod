app.controller("register",function($scope,$location) {
    $scope.Height=0;
    $scope.Sex="";
    $scope.age=0;
    $scope.InitBodyWeight=0;
    $scope.FirstName="";
    $scope.LastName="Doe";
    $scope.BMR = "-----";
    $scope.BMRcalc = function(){
        var BMR=0;
            if(sex=="male"){
                BMR=(66+(13.75($scope.InitBodyWeight))+(5*$scope.Height))-(6.76*$scope.age);
            }
            else{
                BMR=(655+(9.56($scope.InitBodyWeight)+1.85($scope.Height)-4.68($scope.age)));
            }
        $scope.BMR = BMR;
    }
    $scope.makeMale = function(){
        $scope.Sex="Male";
    }
    $scope.makeFemale = function(){
        $scope.Sex="Female";
    }

});
