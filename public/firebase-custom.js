var config = {
   apiKey: "AIzaSyDsSw-mUlJatNUtOtHwiM5tm-oa1uuUdZw",
   authDomain: "hack-your-bod.firebaseapp.com",
   databaseURL: "https://hack-your-bod.firebaseio.com",
   storageBucket: "hack-your-bod.appspot.com",
   messagingSenderId: "898600347372"
 };
 firebase.initializeApp(config);


var database = firebase.database();



var sendMessage = function(message, email) {
  var chats = database.ref("chat");
  var newReference =  chats.push();
  newReference.set({message: message, email: email});
}

var getChats = function(observable) {


    var chats = database.ref("chat");
    var addObjects = function(data){
      var arr = []
      data.forEach(function(snap){
        arr.push(snap.val());
      });
      observable = arr;

    }
    chats.on("value", addObjects);
}
