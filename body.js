$(window).scroll(function() {

  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');

  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });

      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();

var angle = 0;

var test = $('name');

function changeAngle() {
    angle = (angle + 5) % 360;
    test.css({
        'background': '-webkit-linear-gradient(' + angle + 'deg, #27ff27, #27ffff)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
    });
}

setInterval(changeAngle, 100);