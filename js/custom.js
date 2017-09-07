$(document).ready(function(){

	// hero slider desktop
	$("#hero .slider.desktop").slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000
	});

	// hero mobile
	$("#hero .slider.mobile").slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000
	});


	// recommendations carousel
	$('#recommendations .carousel').slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 7,
	  slidesToScroll: 7,
	  responsive: [
	  	{
	  	  breakpoint: 1280,
	  	  settings: {
	  	    slidesToShow: 5,
	  	    slidesToScroll: 5,
	  	  }
	  	},
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3
	      }
	    },
	    {
	      breakpoint: 540,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	// hamburger nav
	$('#menuToggle').click(function(){
		$(this).toggleClass('active');
		$('#departments-dropdown, #departments-toggle').removeClass('active');
		$('#departments-toggle').children('.fa-times').addClass('fa-plus').removeClass('fa-times');
	});

	// department nav
	$('#departments-toggle').click(function(){
		$(this).toggleClass('active');
		if ($('#menuToggle').hasClass('active')) {
			$('#menuToggle').click();
		}
		if ($(this).hasClass('active')){
			$(this).children('.fa-plus').removeClass('fa-plus').addClass('fa-times');
		} else {
			$(this).children('.fa-times').addClass('fa-plus').removeClass('fa-times');
		}
		$('#departments-dropdown').toggleClass('active');
	});

	// search category selection
	$('#header-search select').on('change', function() {
		var val = this.value;
		$('.search-label').text(val);
	});
	
}); // end doc ready
