var config = {
   apiKey: "AIzaSyDsSw-mUlJatNUtOtHwiM5tm-oa1uuUdZw",
   authDomain: "hack-your-bod.firebaseapp.com",
   databaseURL: "https://hack-your-bod.firebaseio.com",
   storageBucket: "hack-your-bod.appspot.com",
   messagingSenderId: "898600347372"
 };
 firebase.initializeApp(config);
uid = "";
 firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
      uid = user.uid;
       window.location = "#/check-in" ;
       $("#logIn").html("<a href='#' onclick='logout()'>Log Out</a>");
       $("#leftmenu").removeClass("hidden");
       $("#mainpanel").removeClass("col-sm-12");
       $("#mainpanel").addClass("col-sm-10");
   } else {
         $("#logIn").html("<a href='/'>Log In</a>");
         $("#leftmenu").addClass("hidden");
         $("#mainpanel").removeClass("col-sm-10");
         $("#mainpanel").addClass("col-sm-12");

   }
 });


var logout = function() {
  firebase.auth().signOut().then(function() {
  $("#logIn").html("<a href='/'>Log In</a>");
   $("#leftmenu").addClass("hidden");
   $("#mainpanel").removeClass("col-sm-10");
   $("#mainpanel").addClass("col-sm-12");
}, function(error) {
  $("#logIn").html("<a href='/'>Log In</a>");
});
}

var database = firebase.database(); // db reference

var getDB = function() {
  db = {}; // global
  db.getChats = function(observable, $scope) { // database get function
      var addObjects = function(data){
      var arr = [];
      data.forEach(function(snap){
        arr.push(snap.val());
      });
      $scope.chats = arr;
      try{
        $scope.$digest();

      }catch(ex){

      }

      $('#chatDiv').stop().animate({
          scrollTop: $('#chatDiv')[0].scrollHeight
        }, 800);
    }
    database.ref("chat").on("value", addObjects);
  }
  db.sendMessage = function(message, email) {
    var chats = database.ref("chat");
    var newReference =  chats.push();
    newReference.set({message: message, email: email});
  }

  db.addCheckIn = function(obj) {
    obj = angular.fromJson(angular.toJson(obj));
    console.log(obj);
    var ref;
    if(obj.key == ""){
      ref = database.ref("checkin").push();
      ref.set(obj);

    }else {
      ref = database.ref("checkin/" + obj.key);
      ref.update(obj);
    }
  }

  db.getCheckin = function($scope){
    console.log(uid);

    database.ref("checkin").orderByChild('uid')
       .equalTo(uid)
       .once('value')
       .then(function (snapshot) {
         var keys = Object.keys(snapshot);
         var i = 0;
          snapshot.forEach(function(data){
            var temp = data.val();
            temp.date = new Date(temp.date);
            if(temp.date.toDateString() == $scope.date.toDateString()){
              $scope.feeling = temp.feeling;
              $scope.weeksOut = temp.weeksOut;
              $scope.additionalTraining = temp.additionalTraining;
              $scope.cardio = temp.cardio;
              $scope.macros = temp.macros;
              $scope.totals = temp.totals;
              $scope.supplements = temp.supplements;
              $scope.comments = temp.comments;
              $scope.timeSpentPosing = temp.timeSpentPosing;
              $scope.key = keys[i];
              try{
                $scope.$digest();

              }catch(ex){

              }

            }
            i++;
          });


         return;



});

};

  db.getExercisePlan = function(observable, $scope){
    var addObjects = function(data){
      var arr = [];
      data.forEach(function(snap){
        arr.push(snap.val());
      });
      $scope.exercises = arr;
      try{
        $scope.$digest();
      }catch(ex){
      }
      database.ref("exercise").once("value", addObjects);
    }

  db.sendExercisePlan = function(title, description, difficulty, weight) {
    var plans = database.ref("plans");
    var newReference = plans.push();
    newReference.set({title: title, description:description, difficulty:difficulty, weight:weight})
  }

  db.addUserInfo = function(obj) {

    database.ref().child("users/" + firebase.auth().currentUser.uid).set(obj);
    database.ref().child("users/" + firebase.auth().currentUser.uid).update(obj);

    alert("Huzzah");
  }

  db.getUserInfo = function ( $scope) {
    database.ref("users").orderByKey().equalTo(uid).limitToFirst(1).once("value",function(data){
      data.forEach(function(snap){
        var temp = snap.val();
        $scope.height=temp.height;
        $scope.sex=temp.sex;
        $scope.age=temp.age;
        $scope.initBodyWeight=temp.initBodyWeight;
        $scope.firstName=temp.firstName;
        $scope.lastName=temp.lastName;
        $scope.activity=temp.activity;
        $scope.BMR=temp.BMR;
        console.log(temp);
        try{
          $scope.$digest();
        }catch(ex){

        }
      })

    })
    try{
      $scope.$digest();
    }catch(ex){

    }
  }
}
}
