    app.controller("progress",function($scope,$location){
        $scope.chartType="";
        $scope.weight="";
        $scope.bodyFat="";
        $scope.waterWeight="";
        $scope.muslcePercent="";
        $scope.macFat="";
        $scope.macCarb="";
        $scope.macProtein="";
        $scope.micFiber="";
        $scope.micFluid="";
        $scope.micSugar="";
        $scope.micPot="";
        $scope.micSod="";

    $scope.createBodyWeightChart = function () {
        var bodyWeightChart = new Chart(ctx, {
            type: 'line',
            data: weight,
            options: {

            yAxisID:"Bodyweight (Pounds)",
            pointRadius:1,
            pointHoverRadius:1.5,
            pointHitRadius:1.5,
            dataPoints: weight

        }
        });
    }




    });