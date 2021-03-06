



$(document).ready(function() {

	var owl = $("#slider");

	owl.owlCarousel({
		  items : 1, //10 items above 1000px browser width
		  itemsDesktop : [1000,1], //5 items between 1000px and 901px
		  itemsDesktopSmall : [900,1], // betweem 900px and 601px
		  itemsTablet: [600,1], //2 items between 600 and 0
		  itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
		  pagination: false,
		  responsive: true,
		  autoHeight: true,
		  slideSpeed: 400,
		  paginationSpeed: 400,
		  rewindNav: false,
		  responsiveRefreshRate: 10,
		  touchDrag: false,
		  mouseDrag: false

		});

	  // Custom Navigation Events
	  $(".next").click(function(){
	  	owl.trigger('owl.next');
	  })
	  $(".prev").click(function(){
	  	owl.trigger('owl.prev');
	  })
	  $(".play").click(function(){
		owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
	  })
	  $(".stop").click(function(){
	  	owl.trigger('owl.stop');
	  })


	  // ANSWERS

	  $('.answer').click(function()
	  {
	  	$(this).toggleClass("answer-selected");
	  });

	  $('.emoticon').click(function()
	  {
	  	// console.log($(this).closest('.rate'));
	  	$(this).closest('.rate').find('.emoticon').removeClass("emoticon-selected");
	  	$(this).addClass("emoticon-selected");
	  	// $('.emoticon').removeClass("emoticon-selected");
	  	// $(this).addClass("emoticon-selected");
	  });

	  $('.start').click(function()
	  {
	  	$('.prev-btn').fadeIn(400);
	  });

	  $('.end').click(function()
	  {
	  	$('.prev-btn').fadeOut(400);
	  });


	  

	});



