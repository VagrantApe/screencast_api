(function(){

	'use strict';

	function ScreencastsCtrl(ScreencastService){
		this.screencasts = ScreencastService.casts.query();
		this.selectedScreencast = null;

		this.showScreencast = function(screencast){
			this.selectedScreencast = screencast;
		};
	}

	angular
		.module('ScreencastApp')
		.controller('ScreencastsCtrl', ScreencastsCtrl);
})();