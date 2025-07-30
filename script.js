$(window).on('scroll', function() {
  applyParallax();
});

function applyParallax() {
  var dist = $(window).scrollTop();

  $('.astro-1').css({
    top: (480 + dist * 0.16) + 'px',
    left: (12 + dist * 0.02) + '%'
  });
  $('.astro-2').css({
    top: (400 + dist * 0.25) + 'px',
    left: (62 - dist * 0.01) + '%'
  });
  $('.ship-1').css('top', (280 + dist * 0.18) + 'px');
  $('.planet-2').css('top', (300 + dist * 0.15) + 'px');
  $('.planet-3').css('top', (450 + dist * 0.12) + 'px');

  var cometOpacity = 1 - dist / 800;
  if (cometOpacity < 0) cometOpacity = 0;

  $('.comet-1').css({
    top: (300 + dist * 0.2) + 'px',
    opacity: cometOpacity
  });
}
