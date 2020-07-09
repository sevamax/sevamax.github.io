$(function() {

	function progressController(value) {

		if (!($('.progress-bar').html().length)) {
			$('.progress-bar').html('<div class="progress">'+
										'<div class="bar">' +
											'<div class="active-bar"></div>' +
										'</div>'+
									'</div>' +
									'<div class="value">0%</div>');
		}

		if (typeof(value) == 'string') {

			console.log('2');

		} else if (value <= 0) {

			$('.progress-bar').find('.active-bar').css('transform', 'translateX(-100%)');
			$('.value').html('0%');
			console.log('Progress-bar: Incorect value of [value]');

		} else if (value >= 100) {

			$('.progress-bar').find('.active-bar').css('transform', 'translateX(0%)');
			$('.value').html('100%');
			console.log('Progress-bar: Incorect value of [value]');

		} else {

			$('.progress-bar').find('.active-bar').css('transform', 'translateX(-' + (100 - value) + '%)');
			$('.value').html(value + '%');

		}
	}

	var i = 0;

	setInterval(function() {

		i++;
		progressController(i);

	}, 50);

});