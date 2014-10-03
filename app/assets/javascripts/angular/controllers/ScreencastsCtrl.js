(function(){

	'use strict';

	function ScreencastsCtrl(ScreencastService){
		this.screencasts = ScreencastService.casts.query();
	}

	angular
		.module('ScreencastApp')
		.controller('ScreencastsCtrl', ScreencastsCtrl);
})();