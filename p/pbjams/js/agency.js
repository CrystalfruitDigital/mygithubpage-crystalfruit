/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('body').removeClass('fade-out');
  $('.booking-field').hide();
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

var contactType = 'contact';

switchContactType = function(type) {
  if (type == 'booking') {
    if (contactType == 'contact') {
      contactType = 'booking';
      // alert('changing from contact to booking');
      $('.booking-field').show();
    }
  } else {
    if (contactType == 'booking') {
      contactType = 'contact';
      // alert('changing from booking to contact');
      $('.booking-field').hide();
    }
  }
}

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});
