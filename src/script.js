document.addEventListener('DOMContentLoaded', () => {
	$('.coffee__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		responsive: [
			{
				breakpoint: 380,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			]
	});
})