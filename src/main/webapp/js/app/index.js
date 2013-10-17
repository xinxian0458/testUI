angular.module('indexApp', [ 'ngCookies', 'ngResource' ]);
var CatalogListCtrl = function($scope, $cookies, $resource) {
	$scope.catalog_list = [];
	var Catalog = $resource('/csa/rest/catalog/:catalogId', {}, {
		'query' : {
			method : "GET",
			transformResponse : function(data, headersGetter) {
				return angular.fromJson(data).catalog;
			},
			isArray : true
		}
	});
	$scope.catalog_list = Catalog.query({
		userIdentifier : $cookies.token,
		scope : "base",
		detail : "basic"
	});
}