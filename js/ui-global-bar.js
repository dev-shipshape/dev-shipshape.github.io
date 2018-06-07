/**
 * UIowa bar dropdown functionality.
 */

(function ($) {

    // Attach event listener to toggle.
//     $("#ui-search-toggle").click(function () {
//       $(this).toggleClass("is-active is-inactive");
//       $('#ui-search').slideToggle().toggleClass("is-visible is-hidden");
//     });
	$(document).ready(function() {
	  var windowWidth = $(window).width();
	  if (windowWidth < 360) {
      $('.search-google-appliance-search-form').hide();
  	}
  	else {
  	  $('#edit-submit-search').replaceWith('<button type="submit" id="edit-submit-search" name="btnG" value="search" class="form-submit btn btn-default"><i class="fa fa-search" aria-hidden="true" label="search" title="search"></i></button>');
  	}

//   	$('.pasos').each(function() {
//   	  var stepHeight = 1;
//       $(this).children('div').each(function() {
//         if ( $(this).innerHeight() > stepHeight ) {
//           stepHeight = $(this).innerHeight();
//         }
//       });
//       stepHeight = String(stepHeight);
//       //console.log(stepHeight);
//       $(this).children('div').css('height', stepHeight+'px');
//     });

	});

	$(window).resize(function () {
	  var windowWidth = $(window).width();
	  if (windowWidth < 360) {
      $('.search-google-appliance-search-form').hide();
  	}
  	else {
      $('.search-google-appliance-search-form').show();
  	  $('#edit-submit-search').replaceWith('<button type="submit" id="edit-submit-search" name="btnG" value="search" class="form-submit btn btn-default"><i class="fa fa-search" aria-hidden="true" label="search" title="search"></i></button>');
  	}

//   	$('.pasos').each(function() {
//   	  var stepHeight = 1;
//   	  var stepWidth = 1;
//       $(this).children('div').each(function() {
//         if ( $(this).innerHeight() > stepHeight ) {
//           stepHeight = $(this).innerHeight();
//         }
//         if ( $(this).innerWidth() > stepWidth ) {
//           stepWidth = $(this).innerWidth();
//         }
//       });
//       stepHeight = String(stepHeight);
//       console.log(stepHeight);
//       $(this).children('div').css('height', stepHeight+'px');
//     });

	});
})(jQuery);
