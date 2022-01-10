//init
// $('.target-modal').hide();

// helper
let log = (arg) => {
  console.log(arg);
}

//

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

new WOW().init();

$('.drawer-icon').on('click', function(e) {
  e.preventDefault();
  $('.drawer-icon').toggleClass('is-active');
  $('.drawer-content').toggleClass('is-active');
  $('.drawer-background').toggleClass('is-active');
  // alert('hooooogen');
  return false;
});


$('a[href^="#"]').on('click', function() {
  var header = $('.header').innerHeight();
  var id = $(this).attr('href');
  var position = 0;
  if(id != '#') {
    position = $(id).offset().top - header;
  }

  console.log(position);

  $('html, body').animate({
    scrollTop: position
    // scrollTop: 2000
  },
  300);
});

$(window).on('scroll', function(){
  if(100 < $(this).scrollTop()) {
    $('.to-top').addClass('is-show');

  } else {
    $('.to-top').removeClass('is-show');

  }
  // console.log($(this).scrollTop());
  // $(this).scrollTop();
});

// for nav

$('.header__nav li a').on('click', function(){
  $('.header__nav li a').removeClass('is-select');
   $(this).addClass('is-select');
});

// accordion menu
$('.qa-box__q').on('click', function() {
  $(this).next().slideToggle();
  $(this).children('.qa-box__icon').toggleClass('is-open');
});

// modal open
$('.js-open-button').on('click', function(e) {
  // alert('hello!!!');
  e.preventDefault();
  // log($(this).data('target'));
  let target = $(this).data('target');
  $(target).show(300);
});

// $('.js-close-button').click((e) => {
//   e.preventDefault();
//   // log('hello, close button!');
//   log($(this).data('target'));
// });

$('.js-close-button').on('click', function(e) {
  e.preventDefault();
  // log('hello');
  // log($(this).data('target'));
  let target = $(this).data('target');
  $(target).hide(300);
});
