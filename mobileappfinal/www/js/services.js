angular.module('starter.services', [])

.factory('Feed', function($resource) {
//	return $resource('http://192.168.1.13:3000/api/FeedItems/:id');
	return $resource('https://slionicfinal.mybluemix.net/api/FeedItems/:id');
});
