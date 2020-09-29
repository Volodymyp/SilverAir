$(document).ready(function () {

/*------------1 page about read-more---------------*/
// 
  var readMoreHtml = $('.about__charter-text').html();
  var lessText = readMoreHtml.substr(0, 160);
  if (readMoreHtml.length > 160) {
    $('.about__charter-text').html(lessText).append("<a href='' class='read-more-link'> Read more</a>");
  }else{
    $('.about__charter-text').html(readMoreHtml);
  };

  $("body").on("click", ".read-more-link", function (event) {
    event.preventDefault();
    $(this).parent(".about__charter-text").html(readMoreHtml).append("<a href='' class='show-less-link'> Read less</a>")
  });

  $("body").on("click", ".show-less-link", function (event) {
   event.preventDefault();
   $(this).parent(".about__charter-text").html(readMoreHtml.substr(0, 160)).append("<a href='' class='read-more-link'> Read more</a>")
  });

  var readMoreHtml2 = $('.about__management-text').html();
  var lessText = readMoreHtml2.substr(0, 160);
  if (readMoreHtml2.length > 160) {
    $('.about__management-text').html(lessText).append("<a href='' class='read-more-link'> Read more</a>");
  }else{
    $('.about__management-text').html(readMoreHtml2);
  };

  $("body").on("click", ".read-more-link", function (event) {
    event.preventDefault();
    $(this).parent(".about__management-text").html(readMoreHtml2).append("<a href='' class='show-less-link'> Read less</a>")
  });

  $("body").on("click", ".show-less-link", function (event) {
   event.preventDefault();
   $(this).parent(".about__management-text").html(readMoreHtml2.substr(0, 160)).append("<a href='' class='read-more-link'> Read more</a>")
  });


  /*------------Slick slider---------------*/

  $('.about__slider').slick({
    dots: true,
    arrows:true,
    dotsClass:'slick-dots',
      prevArrow: "<img src='img/page1/slickArrowL.png' class='prev' alt='prev'>",
      nextArrow: "<img src='img/page1/slickArrowR.png' class='next' alt='next'>",
  });


  function checkForChanges(){
    $(".about__slider .prev, .about__slider .next").height($(".about__slider").height()); 
    setTimeout(checkForChanges, 500);
  }
  checkForChanges();

  function sliderBtnHide() {
    if ($('.slick-dots li:first-child').hasClass('slick-active')) {
      $('.about__slider .prev').hide(1000);
    } else {
      $('.about__slider .prev').show(1000);
    }
    if ($('.slick-dots li:last-child').hasClass('slick-active')) {
      $('.about__slider .next').hide(1000);
    } else {
      $('.about__slider .next').show(1000);
    }
    setTimeout(sliderBtnHide, 500);
  }
  sliderBtnHide();


  /*----------------------------------------------------read-more*/
  readMoreHtml4 = $('.about__content-text').text();

  $(window).resize(function () {
    windowWidth = $(this).width();
      if (windowWidth <= '2000') {
        var readMoreHtml3 = $('.about__content-text').html();
        var lessText = readMoreHtml3.substr(0, 200);
        if (readMoreHtml3.length > 200) {
          $('.about__content-text').html(lessText).append("<a href='' class='read-more-link'> Read more</a>");
        }else{
          $('.about__content-text').html(readMoreHtml3);
        };
        $("body").on("click", ".read-more-link", function (event) {
          event.preventDefault();
          $(this).parent(".about__content-text").html(readMoreHtml3).append("<a href='' class='show-less-link'> Read less</a>")
        });

        $("body").on("click", ".show-less-link", function (event) {
         event.preventDefault();
         $(this).parent(".about__content-text").html(readMoreHtml3.substr(0, 200)).append("<a href='' class='read-more-link'> Read more</a>")
        });

      }else{
                 $('.about__content-text').html(readMoreHtml4);
      }
  });

});
/*-----end-----*/


//-----------btn-top smooth-scroll

$(".btn-bot").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});


