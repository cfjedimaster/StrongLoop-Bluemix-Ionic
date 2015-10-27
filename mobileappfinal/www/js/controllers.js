angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, Feed) {

	Feed.query(function(data) {
		console.dir(data);
		$scope.items = data;
	});

})
.controller('FeedDetailCtrl', function($scope, $stateParams, Feed) {
	
	$scope.item = Feed.get({id:$stateParams.feedId});

});

