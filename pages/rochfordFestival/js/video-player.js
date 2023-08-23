var video = document.getElementById('video');
var hint = document.getElementById('video-hint')
var muted = true;
video.addEventListener('click', function () {
	video.muted = !muted;
	muted = !muted;
	hint.hidden = true;

});