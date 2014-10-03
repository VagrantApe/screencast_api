(function(){

	'use strict';

	function FlowPlayerDirective(){
		return function (scope, element, attrs){
			scope.$watch('screencasts.selectedScreencast', function(screencast){
				if(screencast){
					return element.flowplayer({
						playlist:[[{mp4: screencast.video_url}]],
						ratio: 9/14
					});
				}
			});
		};
	}

	angular
		.module('ScreencastApp')
		.directive('FlowPlayerDirective', FlowPlayerDirective);

})();