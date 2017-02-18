


app.controller("check-in", function ($scope, $location) {
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
    $scope.supplements = [
      {name: "", reason: ""}
    ];
    $scope.comments = "";
    $scope.timeSpentPosing = "";
});
