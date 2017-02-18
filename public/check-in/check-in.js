


app.controller("check-in", function ($scope, $location) {
    $scope.key = "";
    $scope.step = 0;
    $scope.feeling = "";
    $scope.weeksOut = "";
    $scope.additionalTraining = "";
    $scope.daysInWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    $scope.cardio = [
      {name: "Fasted", days: ["", "" ,"" , "" ,"" ,"" , ""]},
      {name: "HIIT", days: ["", "" ,"" , "" ,"" ,"" , ""]},
      {name: "Slow Paced", days: ["", "" ,"" , "" ,"" ,"" , ""]},
      {name: "Other", days: ["", "" ,"" , "" ,"" ,"" , ""]}
    ];
    $scope.macros = [
      {name: "Carbs", days: ["", "", "" ,"" ,"" ,"" ,""]},
      {name: "Fat", days: ["", "", "" ,"" ,"" ,"" ,""]},
      {name: "Protien", days: ["", "", "" ,"" ,"" ,"" ,""]},
      {name: "Calories", days: ["", "", "" ,"" ,"" ,"" ,""]}
    ];
    $scope.totals = [
      {name: "Grams of Fiber on Greens day", days: ["" ,"" ,"", "", "", "" ,""]},
      {name: "Grams of Fiber on Other days", days: ["" ,"" ,"", "", "", "" ,""]},
      {name: "Total Fluid Intake (oz)", days: ["" ,"" ,"", "", "", "" ,""]},
      {name: "Daily Grams of Sugar", days: ["" ,"" ,"", "", "", "" ,""]},
      {name: "Daily Sodium (Mg)", days: ["" ,"" ,"", "", "", "" ,""]},
      {name: "Daily Potassium (Mg)", days: ["" ,"" ,"", "", "", "" ,""]}
    ];
    $scope.supplements = "";
    $scope.comments = "";
    $scope.timeSpentPosing = "";

    $scope.submit = function() {
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
        date: $scope.date
      })
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
