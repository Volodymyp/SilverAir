$(document).ready(function () {


///////----------------- Fancybox slider
$('[data-fancybox="gallery"]').fancybox({
  buttons : [ 
    'slideShow',
    'share',
    'zoom',
    'fullScreen',
    'close'
  ],
    afterLoad : function(instance, current) {
        var pixelRatio = window.devicePixelRatio || 1;

        if ( pixelRatio < 1.5 ) {
            current.width  = current.width  / pixelRatio;
            current.height = current.height / pixelRatio;
        }else{
            current.width  = current.width  * pixelRatio;
            current.height = current.height * pixelRatio;
        }
    }
});

//------------------btn click open fancybox galery
$('.topGalery__btn, .informatioon__btns-galery').on('click', function () {
  $('.topGalery__box-gal').click();
});




  /*---------------slick slider-----------------*/

  $('.botGallery__slider-wrapper1').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: "<img src='../img/aircraft3/botGalery/slick-arrowL.png' class='prev' alt='prev'>",
    nextArrow: "<img src='../img/aircraft3/botGalery/slick-arrowR.png' class='next' alt='next'>",
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 401,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.botGallery__slider-wrapper2').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: "<img src='../img/aircraft3/botGalery/slick-arrowL.png' class='prev' alt='prev'>",
    nextArrow: "<img src='../img/aircraft3/botGalery/slick-arrowR.png' class='next' alt='next'>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 401,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
 $('.botGallery__slider-wrapper3').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: "<img src='../img/aircraft3/botGalery/slick-arrowL.png' class='prev' alt='prev'>",
    nextArrow: "<img src='../img/aircraft3/botGalery/slick-arrowR.png' class='next' alt='next'>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 401,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.botGallery__slider-wrapper2, .botGallery__slider-wrapper3').css({'height' : '0px', 'overflow-y' : 'hidden'});
  $('.botGallery__btn-heavy').addClass('botGallery__btn-focus');
  $(".botGallery__btn-heavy").on("click", function () {
    $('.botGallery__slider-wrapper1, .botGallery__slider-wrapper2, .botGallery__slider-wrapper3').css({'height' : '0px', 'overflow-y' : 'hidden'});
    $('.botGallery__slider-wrapper1').css({'height' : 'auto', 'overflow-y' : 'auto'});
    $('.botGallery__btn-light, .botGallery__btn-mid').removeClass('botGallery__btn-focus');
    $('.botGallery__btn-heavy').addClass('botGallery__btn-focus');
  });
  $(".botGallery__btn-mid").on("click", function () {
    $('.botGallery__slider-wrapper1, .botGallery__slider-wrapper2, .botGallery__slider-wrapper3').css({'height' : '0px', 'overflow-y' : 'hidden'});
    $('.botGallery__slider-wrapper2').css({'height' : 'auto', 'overflow-y' : 'auto'});
    $('.botGallery__btn-light, .botGallery__btn-heavy').removeClass('botGallery__btn-focus');
    $('.botGallery__btn-mid').addClass('botGallery__btn-focus');
  });
  $(".botGallery__btn-light").on("click", function () {
    $('.botGallery__slider-wrapper1, .botGallery__slider-wrapper2, .botGallery__slider-wrapper3').css({'height' : '0px', 'overflow-y' : 'hidden'});
    $('.botGallery__slider-wrapper3').css({'height' : 'auto', 'overflow-y' : 'auto'});
    $('.botGallery__btn-heavy, .botGallery__btn-mid').removeClass('botGallery__btn-focus');
    $('.botGallery__btn-light').addClass('botGallery__btn-focus');
  });


});







