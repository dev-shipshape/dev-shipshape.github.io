(function ($) {
  // Original JavaScript code.
  
$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active');
	$('html, body').animate({scrollTop : 0},0);
		return false;
  });
});



})( jQuery );