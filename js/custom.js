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
    items: 3,
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
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
  });
});


/*=======================================
              STATS
=======================================*/
$(function () {
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
});

/*=======================================
              Clients
=======================================*/
$(function () {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
  });
});

/*=======================================
              navigation
=======================================*/
// Show/Hide transparent black nabigation

$(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() < 50 ) {
        //hide nav
      $("nav").removeClass("vesco-top-nav");
    } else {
      //show nav
      $("nav").addClass("vesco-top-nav");
    }
  });
});

//smooth scrolling
$(function(){
  $("a.smooth-scroll").click(function(event){
    event.preventDefault();
    var section = $(this).attr("href"); //get/return id like #about #team
    $('html, body').animate({
      scrollTop: $(section).offset().top - 64
    }, 1250, "easeInOutExpo");

  });

});
