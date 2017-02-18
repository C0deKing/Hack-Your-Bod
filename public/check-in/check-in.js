


app.controller("check-in", function ($scope, $location) {
    $scope.key = "";
    $scope.step = 0;
    $scope.feeling = "";
    $scope.weeksOut = "";
    $scope.additionalTraining = "";
    $scope.daysInWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    $scope.cardio = [
      {name: "Fasted", days: [{val: ""} ,{val: ""} ,{val: ""}, {val: ""}, {val: ""}, {val: ""} ,{val: ""}]},
      {name: "HIIT", days: [{val: ""} ,{val: ""} ,{val: ""}, {val: ""}, {val: ""}, {val: ""} ,{val: ""}]},
      {name: "Slow Paced", days: [{val: ""} ,{val: ""} ,{val: ""}, {val: ""}, {val: ""}, {val: ""} ,{val: ""}]},
      {name: "Other", days: [{val: ""} ,{val: ""} ,{val: ""}, {val: ""}, {val: ""}, {val: ""} ,{val: ""}]}
    ];
    $scope.macros = [
      {name: "Carbs", days: [{val: ""} ,{val: ""} ,{val: ""}, {val: ""}, {val: ""}, {val: ""} ,{val: ""}]},
      {name: "Fat", days: [{val: ""} ,{val: ""} ,{val: ""}, {val: ""}, {val: ""}, {val: ""} ,{val: ""}]},
      {name: "Protien", days: [{val: ""} ,{val: ""} ,{val: ""}, {val: ""}, {val: ""}, {val: ""} ,{val: ""}]},
      {name: "Calories", days: [{val: ""} ,{val: ""} ,{val: ""}, {val: ""}, {val: ""}, {val: ""} ,{val: ""}]}
    ];
    $scope.totals = [
      {name: "Grams of Fiber on Greens day", days: [{val: ""} ,{val: ""} ,{val: ""}, {val: ""}, {val: ""}, {val: ""} ,{val: ""}]},
      {name: "Grams of Fiber on Other days", days: [{val: ""} ,{val: ""} ,{val: ""}, {val: ""}, {val: ""}, {val: ""} ,{val: ""}]},
      {name: "Total Fluid Intake (oz)", days: [{val: ""} ,{val: ""} ,{val: ""}, {val: ""}, {val: ""}, {val: ""} ,{val: ""}]},
      {name: "Daily Grams of Sugar", days: [{val: ""} ,{val: ""} ,{val: ""}, {val: ""}, {val: ""}, {val: ""} ,{val: ""}]},
      {name: "Daily Sodium (Mg)", days: [{val: ""} ,{val: ""} ,{val: ""}, {val: ""}, {val: ""}, {val: ""} ,{val: ""}]},
      {name: "Daily Potassium (Mg)", days: [{val: ""} ,{val: ""} ,{val: ""}, {val: ""}, {val: ""}, {val: ""} ,{val: ""}]}
    ];
    $scope.supplements = "";
    $scope.comments = "";
    $scope.timeSpentPosing = "";

    $scope.submit = function() {
      console.log($scope.key);
      db.addCheckIn({
        feeling: $scope.feeling,
        weeksOut: $scope.weeksOut,
        additionalTraining: $scope.additionalTraining,
        cardio: $scope.cardio,
        macros: $scope.macros,
        totals: $scope.totals,
        supplements: $scope.supplements,
        comments: $scope.comments,
        timeStentPositon: $scope.timeSpentPosing,
        uid: firebase.auth().currentUser.uid,
        date: $scope.date,
        key: $scope.key
      });
    }


    $scope.getMonday =  function(d) {
        d = new Date(d);
        var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
        return new Date(d.setDate(diff));
      }



      $scope.getPreviousWeek = function() {
        $scope.date = $scope.date.setDate($scope.date - 7);
        $scope.getData();
      }



    $scope.date = $scope.getMonday(new Date());
    $scope.getData = function() {
      db.getCheckin($scope);

    }
    $scope.getData();

    console.log($scope.date);

});
