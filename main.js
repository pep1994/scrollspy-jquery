
$(document).ready(function(){


  $(document).on('scroll', scroll);

  var navLinks = $('nav li a'),
      nav = $('nav'),
      navHeight = $('nav').height(),
      section = $('section');


  $('nav li a').click(function () {
    $(document).off('scroll');
    $('nav li a').removeClass('active');
    $(this).addClass("active");
    var target = $(this).attr('href');


    $('html').animate({
      scrollTop: $(target).offset().top
    }, 700, function () {
      $(document).on('scroll', scroll);
      if ($(document).scrollTop() < nav.height()) {
        nav.css({"background-color": "#000"});
      }
    });
  });


  function scroll () {
    $('a').each(function () {
      var scrollPos = $('html').scrollTop();
      var targetSection = $(this).attr('href');


      if ($(targetSection).offset().top < (scrollPos + navHeight) && ($(targetSection).offset().top + $(targetSection).height()) > (scrollPos + navHeight)) {
        $('nav li a').removeClass("active");
        $(this).addClass("active");
      }

    });

    if ($(document).scrollTop() > nav.height()) {
      nav.css({"background-color": "darkred"});
    } else {
      nav.css({"background-color": "#000"});
    }
  }


});
