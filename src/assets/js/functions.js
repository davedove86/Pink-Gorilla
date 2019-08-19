// Sinple Lightbox
$(function() {
  const $gallery = $('.gallery-wrap ul li a').simpleLightbox();
});

function smoothScroll(n) {
  $('a[href^="#"]').on('click', function(o) {
    var e = $($(this).attr('href'));
    e.length &&
      (o.preventDefault(),
      $('html, body').animate({ scrollTop: e.offset().top }, n));
  });
}
function carousel() {
  var n,
    o = document.getElementsByClassName('mySlides');
  for (n = 0; n < o.length; n++) o[n].style.display = 'none';
  myIndex++,
    myIndex > o.length && (myIndex = 1),
    (o[myIndex - 1].style.display = 'block'),
    setTimeout(carousel, 5e3);
}
function check_if_in_view() {
  var n = $window.height(),
    o = $window.scrollTop(),
    e = o + n;
  $.each($animation_elements, function() {
    var n = $(this),
      t = n.outerHeight(),
      i = n.offset().top;
    i + t >= o && i <= e ? n.addClass('in-view') : n.removeClass('in-view');
  });
}
$(function() {
  smoothScroll(300);
}),
  $(function() {
    function n() {
      o.toggleClass('open'),
        $('nav').toggleClass('open'),
        $('.container').toggleClass('open');
    }
    var o = $('.nav-btn');
    o.click(function() {
      n();
    }),
      $('nav ul li a').click(function(o) {
        n();
      });
  }),
  $(window).scroll(function() {
    $(this).scrollTop() >= 50
      ? $('#return-to-top').fadeIn(200)
      : $('#return-to-top').fadeOut(200);
  }),
  $('#return-to-top').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 500);
  });
var myIndex = 0;
carousel();
var $animation_elements = $('.animation-element'),
  $window = $(window);
$window.on('scroll resize', check_if_in_view), $window.trigger('scroll');
