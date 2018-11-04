$(document).ready(function(){ 

	var userFeed = new Instafeed({
		get: 'user',
		userId: '1776333283',
		accessToken: '1776333283.1677ed0.1466e93493614599b985afff8ce57bf4',
		resolution: 'standard_resolution',
		limit: 33 // 33 max
	});
	userFeed.run();

	setTimeout(function(){
		$('.instafeed').addClass('shadowed');
	}, 100);

});