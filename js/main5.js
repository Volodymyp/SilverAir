$(document).ready(function () {

  $('.news__boxes-box').hide();
  $('.news__boxes-box:hidden').slice(0, 6).show();
  $('.news__btn').on('click', function () {
    $(this).parent().toggleClass('showNews');

    var replaceText = $(this).parent().hasClass('showNews') ? "VIEW LESS NEWS" : "VIEW ALL NEWS";
      $(this).text(replaceText);
      $('.news__btn').append('<i class="fas fa-caret-down"></i>');

    if ($(this).parent().hasClass('showNews')) {
          $('.news__boxes-box').hide();
          $('.news__boxes-box:hidden').slice(0, 600).show();

    } else {
        $('.news__boxes-box').hide();
        $('.news__boxes-box:hidden').slice(0, 6).show();
    }
  });



});




