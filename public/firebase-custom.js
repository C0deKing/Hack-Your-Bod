var config = {
   apiKey: "AIzaSyDsSw-mUlJatNUtOtHwiM5tm-oa1uuUdZw",
   authDomain: "hack-your-bod.firebaseapp.com",
   databaseURL: "https://hack-your-bod.firebaseio.com",
   storageBucket: "hack-your-bod.appspot.com",
   messagingSenderId: "898600347372"
 };
 firebase.initializeApp(config);

 firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
       window.location = "#/chat" ;
       $("#logIn").html("<a href='#' onclick='logout()'>Log Out</a>")
   } else {
         $("#logIn").html("<a href='/'>Log In</a>")

   }
 });


var logout = function() {
  firebase.auth().signOut().then(function() {
  $("#logIn").html("<a href='/'>Log In</a>")
}, function(error) {
  $("#logIn").html("<a href='/'>Log In</a>")
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
    }
    database.ref("chat").on("value", addObjects);
  }
  db.sendMessage = function(message, email) {
    var chats = database.ref("chat");
    var newReference =  chats.push();
    newReference.set({message: message, email: email});
  }

  db.addUserInfo = function(obj) {
    firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
      obj
    });
  }

  db.getUserInfo = function ( $scope) {
    var addObjects = function(data){
    var arr = [];
    data.forEach(function(snap){
      arr.push(snap.val());
    });
    $scope = arr[0];
    try{
      $scope.$digest();
    }catch(ex){

    }
  }
  database.ref("users/" + firebase.auth().currentUser.uid).on("value", addObjects);
  }

}
