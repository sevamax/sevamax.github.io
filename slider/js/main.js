
var $selector = $('.slider-container');
var windowWidth = $(window).width();
var currentSlide = 0;
var slideCount = $selector.find('.slide').length;

slideController(0);

$selector.find('.slider-row').css('width', (windowWidth * slideCount + 10) + 'px')

function slideController(value) {
	$('.dots .dot').removeClass('active');
	$('[data-slide="' + (value + 1) + '"]').addClass('active');
	var distance = value * windowWidth * (-1);
	$selector.find('.slider-row').css('transform', 'translateX(' + distance + 'px)');
}

$('.arrow.prev').click(function() {
	currentSlide--;
	if (currentSlide == -1) currentSlide = slideCount - 1;
	slideController(currentSlide);
});

$('.arrow.next').click(function() {
	currentSlide++;
	if (currentSlide == slideCount) currentSlide = 0;
	slideController(currentSlide);
});

$('.dots .dot').click(function() {
	currentSlide = parseFloat($(this).attr('data-slide')) - 1;
	slideController(currentSlide);

});