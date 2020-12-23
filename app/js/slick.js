// Слайдер Slick
$(window).on('load', (function() {

	// Слайдер header
	$('.directions__wrap').slick({
		slidesToShow: 4,
		arrows: false,
		dots: true,
		adaptiveHeight: true
	});

}));
