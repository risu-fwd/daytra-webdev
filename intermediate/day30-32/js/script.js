$(function () {
  // initializing WOW.js library
  new WOW().init();

  // drawer
  $('.drawer').drawer();


  $('.drawer').drawer({
    class: {
      nav: 'drawer-nav',
      toggle: 'drawer-toggle',
      overlay: 'drawer-overlay',
      open: 'drawer-open',
      close: 'drawer-close',
      dropdown: 'drawer-dropdown'
    },
    iscroll: {
      // Configuring the iScroll
      // https://github.com/cubiq/iscroll#configuring-the-iscroll
      mouseWheel: true,
      preventDefault: false
    },
    showOverlay: true
  });


  

  // get data from input form
  $('#input-name').keyup(inputCheck);
  $('#input-mail').keyup(inputCheck);
  $('input[name="radio-contact"]').change(inputCheck);
  $('#input-inqu').keyup(inputCheck);
  $('#check-contact').change(inputCheck);

  // submit button
  $('#submit-btn').click(sentDataDetail);


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

});

// helper
function log(arg) {
  console.log(arg);
}

// page reload if press logo at page top
function reload() {
  window.location.reload(true);
}

let i_name, i_mail, i_corp, i_inqu, i_term;
// submit button available check
function inputCheck() {
  i_name = i_mail = i_corp = i_inqu = i_term = "";

  i_name = $('#input-name').val();
  i_mail = $('#input-mail').val();
  i_corp = $("input[name='radio-contact']:checked").val();
  i_inqu = $('#input-inqu').val();
  i_term = $('#check-contact').prop('checked');

  // sentDataDetail();

  if(i_name != "" && i_mail != "" && i_inqu != "" && i_term != false) {
    $('#submit-btn').prop( 'disabled', false );
  } else {
    $('#submit-btn').prop( 'disabled', true );
  }
}

// checking sent data when pressed submit button
function sentDataDetail() {
  log('========== sent data ==========');
  log('name: ' +  i_name);
  log('mail: ' + i_mail);
  log('radio: ' + i_corp);
  log('textarea: ' + i_inqu);
  log('i_term: ' + i_term);

  alert(`
  ----- sent data -----

  name    : ${i_name}
  mail    : ${i_mail}
  radio   : ${i_corp}
  textarea: ${i_inqu}
  checkbox: ${i_term}
  `);
}

// modal open
$('.js-open-button').on('click', function(e) {
e.preventDefault();
  // log($(this).data('target'));
  let target = $(this).data('target');
  $(target).show(300);

  $('html, body').toggleClass('fixed-screen');
});

// close button on modal
$('.js-close-button').on('click', function(e) {
  e.preventDefault();
  // log($(this).data('target'));
  let target = $(this).data('target');
  $(target).hide(300);

  $('html, body').toggleClass('fixed-screen');
});

// when drawer button clicked
// $('.drawer').on('drawer.opened', function(){
//   $('.drawer-nav').addClass('expand-width');
// });

// $('.drawer').on('drawer.closed', function(){
//   $('.drawer-nav').removeClass('expand-width');
// });