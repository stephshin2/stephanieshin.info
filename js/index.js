var app = angular.Module('personalWebApp', 
	[
		'ngRoute'
	])

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'HomeCtrl', 
		templateUrl: 'templates/home.html',
	})

});
