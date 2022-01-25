$(function () {

  log('hello, again!');

  // drawer
  $('.drawer').drawer();

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

  // initializing WOW.js library
  new WOW().init();

  // google form
  let $form = $('#js-form');
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
        }, 
        200: function() { 
          //送信に失敗したときの処理 
        }
      } 
    });
    return false; 
  }); 

});

// helper
function log(arg) {
  console.log(arg);
}


