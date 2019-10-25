$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 90);
});

$(window).resize(function () {
  if ($(window).width() < 751) {
    // do something here
    $(".fixed-top").addClass("top-nav-collapse");
  } else {
    $(".fixed-top").removeClass("top-nav-collapse");
  }
});

$(window).resize(function () {
  if ($(window).width() < 447) {
    // do something here
    $(".fixed-top").addClass("top-nav-collapse-1");
  } else {
    $(".fixed-top").removeClass("top-nav-collapse-1");
  }
});
$(window).resize(function () {
  if ($(window).width() < 281) {
    // do something here
    $(".fixed-top").addClass("top-nav-collapse-2");
  } 
  else {
    $(".fixed-top").removeClass("top-nav-collapse-2");
  }
});