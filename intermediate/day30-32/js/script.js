$(function () {
  // initializing WOW.js library
  new WOW().init();

  // get data from input form
  $('#input-name').keyup(inputCheck);
  $('#input-mail').keyup(inputCheck);
  $('input[name="radio-contact"]').change(inputCheck);
  $('#input-inqu').keyup(inputCheck);

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

let i_name, i_mail, i_corp, i_inqu;
// submit button available check
function inputCheck() {
  i_name = i_mail = i_corp = i_inqu="";

  i_name = $('#input-name').val();
  i_mail = $('#input-mail').val();
  i_corp = $("input[name='radio-contact']:checked").val();
  i_inqu = $('#input-inqu').val();

  // sentDataDetail();

  if(i_name != "" && i_mail != "" && i_inqu != "") {
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

  alert(`
  --- send data ---
  name    : ${i_name}
  mail    : ${i_mail}
  radio   : ${i_corp}
  textarea: ${i_inqu}
  `);
}
