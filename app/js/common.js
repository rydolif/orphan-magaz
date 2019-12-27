$(function() {


//-------------------------скорость якоря---------------------------------------
  $(".hero li").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 10}, 'slow', 'swing');
  });


//-------------------------------попандер---------------------------------------
  $('.modal').popup({
    escape: false,
    blur: false,
    scrolllock: true,
    transition: 'all 0.3s'
  });


//------------------------------------form-------------------------------------------
  $('input[type="tel"]').mask('+0 (000) 000-00-00');


//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('.nav').toggleClass('nav--active');
    $('.header').toggleClass('header--menu');
  });

  if ($(this).scrollTop()<20){
      $('.header').removeClass('header--menu');
  }

});

//----------------------------------------fixed----------------------------------


 $(window).scroll(function(){
  if($(this).scrollTop()>20){
      $('.header').addClass('header--menu');
  }
  else if ($(this).scrollTop()<20){
      $('.header').removeClass('header--menu');
  }
});

