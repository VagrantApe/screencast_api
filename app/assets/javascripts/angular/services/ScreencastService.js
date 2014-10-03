(function(){
	'use strict';

	function ScreencastService($resource){

		var ScreencastService = {};

		ScreencastService.casts = $resource('/api/screencasts/:id', {id: '@id'});
	
		return ScreencastService;
	}

	//ScreencastService.$inject = ['$resource'];
	angular
		.module('ScreencastApp')
		.factory('ScreencastService', ScreencastService);

})();