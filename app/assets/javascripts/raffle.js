var app = angular.module('raffle', ["ngResource"]);

app.factory("Entry", function($resource) {
  return  $resource("/entries/:id", {id: "@id"}, {
  	'save'   : {method:'POST'},
  	'query'  : {method: 'GET', isArray: false},
  	'delete': {method:'DELETE'}
  });
});

app.controller('RaffleCtrl', ['$scope', 'Entry', function($scope, Entry) {
  $scope.entries =  Entry.query();

  $scope.addEntry = function() {
    entry = Entry.save($scope.newEntry)
    $scope.entries.entries.push(entry);
    $scope.newEntry = {};
  }
}]);

