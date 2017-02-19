
var myChart;

      app.controller("progress",function($scope,$location){
        $scope.graph = {};
        $scope.pie = {};
        $scope.exercise = {};
        $scope.lookBackWeeks = 10;
        $scope.pie.data = [0,0,0,0];
        $scope.pie.labels = ["Carbs", "Fat", "Protien"];
        $scope.pie.options = {
          animation: true
        };
        $scope.pie.series = "Macros";
        $scope.records = [];
        $scope.graph.data = [[0, 0, 0, 0]];
        $scope.graph.labels = ["-", "-", "-", "-"];
        $scope.graph.options = {
          animation: true
        };
        $scope.graph.series = ['Cardio']
        // $scope.graph.colours;
        $scope.graph.legend = true;

        $scope.exercise.data = [[],[],[],[]];
        $scope.exercise.labels = [];

        $scope.exercise.options = {
          animation: true,
          scales: {
            yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        },

      ]
    }
    };

        $scope.exercise.series = ["Fasted", "HIIT","Slow Paced","Other"]
        $scope.exercise.legend = true;

        $scope.update = function() {
          console.log("HERE");
          db.getProgress(function(data, labels, pieData, cardioArr){
            $scope.records = data;
            $scope.graph.data = [data];
            $scope.graph.labels = labels;
            $scope.pie.data = pieData;
            $scope.exercise.data = cardioArr;
            $scope.exercise.labels = labels;

            try{
              $scope.$digest();
            }catch(ex){

            }
          },$scope.lookBackWeeks );
        }

        $scope.update();




    });
