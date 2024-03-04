$(function(){
if (window.matchMedia && window.matchMedia('(max-device-width: 767px)').matches) {
    lightbox.option({
        'showImageNumberLabel': false,
        'fitImagesInViewport': false,
        'maxWidth': 300,
    });
  } else if (window.matchMedia && window.matchMedia('(max-device-width: 1400px)').matches) {
    lightbox.option({
        'showImageNumberLabel': false,
        'fitImagesInViewport': false,
        'maxWidth': 767,
    });
  } else {
    lightbox.option({
        'showImageNumberLabel': false,
        'fitImagesInViewport': false,
    });
  }
})