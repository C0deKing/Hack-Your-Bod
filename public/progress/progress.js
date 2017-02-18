    app.controller("progress",function($scope,$location){
        $scope.chartType="";
        $scope.weight="";
        $scope.bodyFat="";
        $scope.waterWeight="";
        $scope.muslcePercent="";
        $scope.macroNutrients="";//MUST BE IN ORDER OF CARB,PROTEIN,FAT
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

    $scope.createBodyFatChart = function() {
            var bodyFatChart = new Chart(ctx, {
            type: 'line',
            data: bodyFat,
            options: {

            yAxisID:"Body Fat %",
            pointRadius:1,
            pointHoverRadius:1.5,
            pointHitRadius:1.5,
            dataPoints: bodyFat

        }
        });

    }

    $scope.createWaterWeightChart = function () {
            
            var waterWeightChart = new Chart(ctx, {
            type: 'line',
            data: waterWeight,
            options: {

            yAxisID:"Water Weight (Pounds)",
            pointRadius:1,
            pointHoverRadius:1.5,
            pointHitRadius:1.5,
            dataPoints: waterWeight

        }
        });
    }

    $scope.createMusclePercentageChart = function () {

            var waterWeightChart = new Chart(ctx, {
            type: 'line',
            data: waterWeight,
            options: {

            yAxisID:"Water Weight (Pounds)",
            pointRadius:1,
            pointHoverRadius:1.5,
            pointHitRadius:1.5,
            dataPoints: waterWeight

        }
    });
    
    $scope.createMacroNutrientChart = function (){
        var myPieChart = new Chart(ctx,{
        type: 'pie',
        data: macroNutrients,
        options: {

            labels:["Carbs","Protein","Fats"],
                animation:{
                    animation.animateRotate : true
                }

        }
    });

    }

    }



    });