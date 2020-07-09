
$('.accordeon .item-title').click(function() {

	if ($(this).hasClass('active')) {
		$('.accordeon .item-content').slideUp(300);
		$('.accordeon .item-title').removeClass('active');
	} else {
		$('.accordeon .item-content').slideUp(300);
		$(this).parent().children('.item-content').slideDown(200);
		$('.accordeon .item-title').removeClass('active');
		$(this).addClass('active');
	}

});
