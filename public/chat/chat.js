

  app.controller("chat", function($scope, $location){
      $scope.message = "";
      db.getChats($scope.chats, $scope);
      $scope.sendMessage = function() {
        db.sendMessage($scope.message, firebase.auth().currentUser.email);
        $scope.message = "";
      }
  });
