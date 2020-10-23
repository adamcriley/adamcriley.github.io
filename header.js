var $headline = $('.headline'),
    $inner = $('.inner'),
    $nav = $('nav');

if( window.innerWidth > 767 ){
  var navHeight = 75;
}

if( window.innerWidth <= 768 ){
  var navHeight = 45;
}

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop(),
      headlineHeight = $headline.outerHeight() - navHeight,
      navOffset = $nav.offset().top;

  $headline.css({
    'opacity': (1 - scrollTop / headlineHeight)
  });
  $inner.children().css({
    'transform': 'translateY('+ scrollTop * 0.4 +'px)'
  });
  if (navOffset > headlineHeight) {
    $nav.addClass('scrolled');
  } else {
    $nav.removeClass('scrolled');
  }
});

console.log('scroll-y');