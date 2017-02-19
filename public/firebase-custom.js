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
         logout();
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

    alert("Saved!");
  }

  db.getCheckin = function($scope){
    database.ref("checkin").orderByChild('uid')
       .equalTo(uid)
       .once('value')
       .then(function (snapshot) {
         var keys = Object.keys(snapshot.val());
         var i = 0, found = false;
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
              $scope.currentWeight = temp.currentWeight;
              $scope.key = keys[i];
              found = true;

            }
            i++;
          });
          console.log(found);
          if(!found){
            $scope.reset();
          }

          try{
            $scope.$digest();

          }catch(ex){

          }

         return;



});

};

  db.getExercisePlan = function($scope){
    database.ref("exercise").orderByKey()
       .once('value')
       .then(function(data){
         var keys = Object.keys(data);
         var arr = [], i = 0;
         data.forEach(function(snap){
           var temp = snap.val();
           temp.key = keys[i++];
           arr.push(temp);
         });
         $scope.records = arr;
         try{
           $scope.$digest();
         }catch(ex){
         }
       });

  }

  db.getProgress = function(callback, numberOfWeeks){
    database.ref("checkin")
      .orderByChild("uid")
      .equalTo(uid)
      .once("value", function(snapshot) {
        var arr = [], labels = [], pieArr = [], cardioArr = [[], [], [],[]];
          snapshot.forEach(function(data){
            var temp = data.val();
            if(weeks_between(new Date(), new Date(temp.date)) <= numberOfWeeks){
                arr.push(temp.currentWeight);
                labels.push( new Date(temp.date).toDateString());
                temp.macros.forEach(function(macro) {
                  var total = 0.0;
                  if(macro.name != "Calories"){
                    macro.days.forEach(function(day){
                      total += parseFloat(day.val);
                    });
                    pieArr.push(total);
                  }

                })
                var i = 0;
                temp.cardio.forEach(function(cardio){
                  var total = 0.0;
                  cardio.days.forEach(function(day){
                    total += parseFloat(day.val);
                  });
                  cardioArr[i++].push(total);
                });

            }
          })
          callback(arr, labels, pieArr, cardioArr);

      });


  }




  db.getExercisePlanData = function(callback){
    database.ref("exercise").orderByKey()
       .once('value')
       .then(function(data){
         var keys = Object.keys(data);
         var arr = [], i = 0;
         data.forEach(function(snap){
           var temp = snap.val();
           temp.key = keys[i++];
           arr.push(temp);
         });
         callback(arr);
       });

  }


  db.updateExercisePlan = function(obj) {
    if(obj.key){
      console.log(obj)
      var ref = database.ref("exercise/" + obj.key);
      ref.update(obj);
    }else {
      var ref = database.ref("exercise").push();
      ref.set(obj)

    }

  }

  db.addUserInfo = function(obj) {

    database.ref().child("users/" + firebase.auth().currentUser.uid).set(obj);
    database.ref().child("users/" + firebase.auth().currentUser.uid).update(obj);

    alert("Huzzah");
  }

  db.getUserInfo = function ($scope) {
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
        //$scope.BMR=temp.BMR;
        $scope.focus = temp.focus;
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
