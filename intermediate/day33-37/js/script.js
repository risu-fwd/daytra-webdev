$(function () {

  // ----- initializing external JS libraries -----
  // drawer.js
  $('.drawer').drawer();
  // wow.js
  new WOW().init(0);


  // ----- main script -----

  // smooth scroll
  $('a[href^="#"]').on('click', function() {
    var header = $('.header').innerHeight();
    var id = $(this).attr('href');
    var position = 0;
    if(id != '#') {
      position = $(id).offset().top - header;
    }

    // console.log(position);

    $('html, body').animate({
      scrollTop: position
      // scrollTop: 2000
    },
    300);
  });

  log('hello, JS!');

});

// helper
function log (arg) {
  console.log(arg);
}

