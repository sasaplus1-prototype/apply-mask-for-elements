(function(){

  'use strict';

  var image = document.getElementById('js-image');

  var button0   = document.getElementById('js-button-0'),
      button20  = document.getElementById('js-button-20'),
      button50  = document.getElementById('js-button-50'),
      button70  = document.getElementById('js-button-70'),
      button100 = document.getElementById('js-button-100'),
      buttonAnimation = document.getElementById('js-button-animation');

  button0.addEventListener('click', function() {
    image.style.webkitMaskBoxImage =
      '-webkit-linear-gradient(right, white, white 0%, transparent 10%, transparent 0%)';
  }, false);

  button20.addEventListener('click', function() {
    image.style.webkitMaskBoxImage =
      '-webkit-linear-gradient(right, white, white 20%, transparent 30%, transparent 20%)';
  }, false);

  button50.addEventListener('click', function() {
    image.style.webkitMaskBoxImage =
      '-webkit-linear-gradient(right, white, white 50%, transparent 60%, transparent 50%)';
  }, false);

  button70.addEventListener('click', function() {
    image.style.webkitMaskBoxImage =
      '-webkit-linear-gradient(right, white, white 70%, transparent 80%, transparent 70%)';
  }, false);

  button100.addEventListener('click', function() {
    image.style.webkitMaskBoxImage =
      '-webkit-linear-gradient(right, white, white 100%, transparent 110%, transparent 100%)';
  }, false);

  buttonAnimation.addEventListener('click', function() {
    Velocity(image, 'stop');
    Velocity(image, {
      tween: 100
    }, {
      duration: 1000,
      easing: 'ease',
      progress: function(elements, c, r, s, t) {
        var i, len;

        for (i = 0, len = elements.length; i < len; ++i) {
          elements[i].style.webkitMaskBoxImage =
            '-webkit-linear-gradient(right, white, white ' + t + '%, transparent ' + (t + 10) + '%, transparent ' + t + '%)';
        }
      }
    });
  }, false);

}());
