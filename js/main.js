$(document).ready(function () {

  function ibg(){

  let ibg=document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
  if(ibg[i].querySelector('img')){
  ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
  }
  }
  }

  ibg();

  //---------------------burger
  $(".navbar-toggler").on("click", function () {
      $(this).toggleClass('babai');
  });

  //Navbar color scroll function
  function consoleBG() {
    if ($(window).scrollTop() < 100 && $(window).width() >= '768') {
      $('.navigation_box').css('background', 'rgba(255,255,255, 0.7)');
      $('.nav-link').css('color', '#787878');
      $('.dropdown-menu').css('background', 'rgba(255,255,255, 0.7)');
    } else if ($(window).scrollTop() < 100 && $(window).width() < '768') {
      $('.navigation_box').css('background', '#ffffff');
      $('.nav-link').css('color', '#787878');
      $('.dropdown-menu').css('background', '#ffffff');
    }else if ($(window).scrollTop() > 100 && $(window).width() < '768') {
      $('.navigation_box').css('background', '#ffffff');
      $('.nav-link').css('color', '#787878');
      $('.dropdown-menu').css('background', '#ffffff');
    } else if ($(window).scrollTop() > 100 && $(window).width() >= '768') {
      $('.navigation_box').css('background', '#ffffff');
      $('.nav-link').css('color', '#787878');  
      $('.dropdown-menu').css('background', '#ffffff');
   
    }
  }
  consoleBG();

  $(window).scroll(function() {
    consoleBG();
  });


  $(window).on('load resize',consoleBG);



});




    new WOW().init();
