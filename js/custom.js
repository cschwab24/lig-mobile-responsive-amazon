$(document).ready(function(){

	// hero slider
	$("#hero .slider").slick({
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
	});
	
}); // end doc ready
