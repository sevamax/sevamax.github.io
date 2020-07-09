
var deg = 0;
var $selector = $('.box');
var intervalId = 0;
var action = false;

function setDeg(value) {
	$selector.css('transform', 'rotateY(' + value + 'deg)');
}

$('.btn.start').click(function() {
	if (!action) {
		intervalId = setInterval(function() {
			deg++;
			if (deg >= 360) deg = 0;
			setDeg(deg);
		}, 17);
		action = true;
	}
});

$('.btn.pause').click(function() {
	clearInterval(intervalId);
	action = false;
});

$('.btn.stop').click(function() {
	clearInterval(intervalId);
	deg = 0;
	setDeg(deg);
	action = false;
});

$selector.click(function() {
	if (action) {
		clearInterval(intervalId);
		action = false;
	} else {
		intervalId = setInterval(function() {
			deg++;
			if (deg >= 360) deg = 0;
			setDeg(deg);
		}, 17);
		action = true;
	}
});