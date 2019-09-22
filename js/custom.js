/*=======================================
                  SERVICES
=======================================*/
$(function () {
  // animate on scroll
  new WOW().init();

});

/*=======================================
                  WORK
=======================================*/
$(function () {
  $("#work").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    gallery: {
      enabled: true
    }
  });
});

/*=======================================
                  TEAM
=======================================*/
$(function () {
  $("#team-members").owlCarousel({
    item: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
  });
});


/*=======================================
              TESTIMONIAL
=======================================*/
$(function () {
  $("#customers-testimonials").owlCarousel({
    item: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
  });
});
// アイテム数が反映されない…。