$(function() {

	function modalController(target) {
		if (target == 'close') {
			$('.modal-container, .modal-container .modal').removeClass('active');
		} else {
			$('.modal-container, .modal-container .modal' + target).addClass('active');
		}
	}

	$('[data-modal]').click(function() {
		var target = $(this).attr('data-modal');
		modalController(target);
	});
	$('.modal-container').click(function() {
		modalController('close');
	});

	setTimeout(function() {
		modalController('#m2');
	}, 5000);
});
