$(document).ready(function(){

	var audio;
	var trackName = './../mp3/Caesars--Jerk-It-Out.mp3';
	$playBtn = $('#audio-play');
	$pauseBtn = $('#audio-pause');
	$audioControl = $('[data-type="audio-control"]');

	setTimeout(function(){
		initAudioPlayer();
	}, 800);

	function initAudioPlayer(){
		audio = new Audio();
		audio.src = trackName;
		audio.loop = true;
		audio.play();
		
		$playBtn.parent().show();

		$audioControl.click(function(){
			console.log('audio control click');
			if ( audio.paused ){
				audio.play();
				$playBtn.parent().hide();
				$pauseBtn.parent().show();
				console.log('playing now');
			} else {
				audio.pause();
				$playBtn.parent().show();
				$pauseBtn.parent().hide();
				console.log('paused now');
			}
		});
	}

});
