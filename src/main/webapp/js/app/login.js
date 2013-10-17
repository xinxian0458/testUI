angular.module('loginApp', [ 'ngCookies', 'ngResource' ]);
var LoginCtrl = function($scope, $http, $cookies, $resource) {
	$scope.signin = function() {
		if ($scope.login_form.$valid) {
			var submit = $http({
				'method' : "POST",
//				'url' : "/csa/j_spring_security_check",
				'url' : "http://16.158.166.166:8080/HPCC/j_spring_security_check",
				'headers' : {
					'Content-Type' : "application/x-www-form-urlencoded"
				},
				'data' : "j_username=" + $scope.j_username + "&j_password="
						+ $scope.j_password + "&j_tenant=525b8424d752f3ebce15c2f4"
			});
			submit.success(function(response, status, headers, config) {
				// get user token
//				$http.get("/csa/rest/login/CSA-Provider/admin").success(
//						function(response, status, headers, config) {
//							// add token to cookie and redirect to index page
//							if (response.id === undefined) {
//								alert("login error!");
//								return false;
//							}
//							$cookies.token = response.id;
//							window.location.href = "index.html";
//						});
				window.location.href = "index.html";
			});
			submit.error(function() {
				alert("login error!");
			});
		}
	}
}