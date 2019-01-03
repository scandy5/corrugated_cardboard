$('.making-slider').slick({
	asNavFor: '.making-slider-nav',
	fade: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,

});

$('.making-slider-nav').slick({
	asNavFor: '.making-slider',
	slidesToShow: 4,
	focusOnSelect: true,
	slidesToScroll: 1,
	responsive: [
	   {
	     breakpoint: 576,
	     settings: {
	       slidesToShow: 1,
	       slidesToScroll: 1,
	       infinite: true,
	     }
	   }]
});