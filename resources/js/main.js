$(document).ready(function () {
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var $scrollProgress = 0;
  $(window).scroll(function (){
    var $currentScrollPosition = $(this).scrollTop();
    if ($currentScrollPosition - $scrollProgress > 50) {
        var $navbarHeight = $('.navbar').css('height');
        $('.navbar').animate( {top: '-' + $navbarHeight}, 150);
        $scrollProgress = $currentScrollPosition;
      } else if ($scrollProgress - $currentScrollPosition > 50) {
        $('.navbar').animate( {top: 0}, 150);
        $scrollProgress = $currentScrollPosition;
      }
    });
});
