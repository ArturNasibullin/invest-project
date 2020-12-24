// Слайдер Slick
$(window).on('load', (function() {

	// Слайдер header
	$('.directions__wrap').slick({
		slidesToShow: 4,
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		responsive:[
			{
				breakpoint: 979,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1
				}
			  },
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	});

}));
