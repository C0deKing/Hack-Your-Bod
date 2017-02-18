var config = {
   apiKey: "AIzaSyDsSw-mUlJatNUtOtHwiM5tm-oa1uuUdZw",
   authDomain: "hack-your-bod.firebaseapp.com",
   databaseURL: "https://hack-your-bod.firebaseio.com",
   storageBucket: "hack-your-bod.appspot.com",
   messagingSenderId: "898600347372"
 };
 firebase.initializeApp(config);


var database = firebase.database();

var getDB = function() {
 db = {};
  db.getChats = function(data, $scope) {



    var addObjects = function(data){
      var arr = []
      data.forEach(function(snap){
        arr.push(snap.val());
      });
                //data = arr;
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

}
