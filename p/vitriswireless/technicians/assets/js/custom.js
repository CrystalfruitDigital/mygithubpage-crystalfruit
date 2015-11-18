(function($){

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});

	$(document).ready(function() {


	});

})(jQuery);

var hidden = 0;

$(".hide-sidebar").click(function(){
	if(!hidden){
		$(".sidebar").hide();
		$(".hide-sidebar").text(">");
		$(".map-div").width("100%");
		hidden = 1;
	} else {
		$(".sidebar").show();
		$(".hide-sidebar").text("<");
		$(".map-div").width("70%");
		hidden = 0;
	}
});