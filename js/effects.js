$(document).ready(function() {
  var animateTime = 500;

  $('.class').click(function() {
    // $(this).find('.spec').fadeIn();
    var spec = $(this).find('.spec');
    if(spec.height() === 0){
      // autoAnimateSize(spec, animateTime);
      autoWidthAnimate(spec, animateTime);
      // autoHeightAnimate(spec, animateTime);
      $(this).addClass('selected');
    } else {
      spec.animate({ height: '0' }, animateTime, function() {
        spec.animate({ width: '0' }, animateTime);
      });
      $(this).removeClass('selected');
    }
  });

  $('#form .btn').click(function() {
    $(this).fadeOut(350);
    $('#form iframe').fadeIn(1800);
  });

  $('a[href="#form"]:not([href="#"])').click(function() {
    $('#form .btn').hide();
    $('#form iframe').fadeIn(1800);
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/* Function to animate height: auto */
function autoAnimateSize(element, time) {
  var curHeight = element.height();
  var curWidth = element.width();
  var autoWidth = element.css('width', 'auto').width();

  element.width(curWidth);

  element.animate({ width: autoWidth }, time).delay(time).animate({ height: element.css({height: 'auto'}).height()})
}

function autoHeightAnimate(element, time){
  var curHeight = element.height(), // Get Default Height
      autoHeight = element.css({height: 'auto'}).height(); // Get Auto Height
  // var curWidth = element.width(),
  //     autoWidth = element.css('width', 'auto').width();
  element.height(curHeight); // Reset to Default Height
  // element.width(curWidth);
  element.animate({ height: autoHeight }, time); // Animate to Auto Height
  // element.stop().animate({ width: autoWidth }, time);
}

function autoWidthAnimate(element, time){
  var curWidth = element.width(),
      autoWidth = element.css('width', 'auto').width();
  element.width(curWidth);
  element.animate({ width: autoWidth }, time, function() {
    autoHeightAnimate(element, time);
  });
  // element.animate({ width: autoWidth }, time).promise().done(autoHeightAnimate(element,time));
}
