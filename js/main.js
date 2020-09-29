$(document).ready(function () {

/*-------class for background----------*/

  function ibg(){

  let ibg=document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
  if(ibg[i].querySelector('img')){
  ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
  }
  }
  }

  ibg();

/*-------Navbar color scroll function plus window resize----------*/

  function consoleBG() {
    if ($(window).scrollTop() <= 100 && $(window).width() >= '768') {
      $('.navigation_box').css('background', 'rgba(255,255,255, 0.7)');
      $('.nav-link').css('color', '#787878'); 
    } else if ($(window).scrollTop() <= 100 && $(window).width() < '768') {
      $('.navigation_box').css('background', '#ffffff');
      $('.nav-link').css('color', '#787878');
    }else if ($(window).scrollTop() > 100 && $(window).width() < '768') {
      $('.navigation_box').css('background', '#ffffff');
      $('.nav-link').css('color', '#787878');
    } else if ($(window).scrollTop() > 100 && $(window).width() >= '768') {
      $('.navigation_box').css('background', '#ffffff');
      $('.nav-link').css('color', '#787878');  
    }
  }
  consoleBG();

  $(window).scroll(function() {
    consoleBG();
  });

  $(window).on('load resize',consoleBG);

  /*---------------burger-----------------*/

  $(".navbar-toggler").on("click", function () {
      $(this).toggleClass('babai');
  });

});

/*-------wow animate----------*/

new WOW().init();
