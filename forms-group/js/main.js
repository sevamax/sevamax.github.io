$('.value').html($('input[type="range"]').val());

$('input[type="range"]').change(function() {

	var value = $(this).val();
	$('.value').html(value);

	$('.value').html($(this).val());

});

// .mousemove(); - jQuery method