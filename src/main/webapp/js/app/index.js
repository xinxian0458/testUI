angular.module('indexApp', [ 'ngCookies', 'ngResource' ]);
var CatalogListCtrl = function($scope, $http, $cookies, $resource) {
	$scope.catalog_list = [];
	// $http.get('http://16.158.166.166:8080/HPCC/tenants/getTenantsForRegister')
	// .success(function(response, status, headers, config) {
	// $scope.catalog_list = response;
	// });
	var Catalog = $resource('http://16.158.166.166\\:8080/HPCC/tenants/getTenantsForRegister/:catalogId');
	$scope.catalog_list = Catalog.query({
		format : "JSON"
	});
	// var Catalog = $resource('/csa/rest/catalog/:catalogId', {}, {
	// 'query' : {
	// method : "GET",
	// transformResponse : function(data, headersGetter) {
	// return angular.fromJson(data).catalog;
	// },
	// isArray : true
	// }
	// });
	// $scope.catalog_list = Catalog.query({
	// userIdentifier : $cookies.token,
	// scope : "base",
	// detail : "basic"
	// });
}