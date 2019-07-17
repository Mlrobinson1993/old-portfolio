(function($) {
  "use strict";

  /* ---------------------------------------------- /*
* Preloader
/* ---------------------------------------------- */

  $(window).on("load", function() {
    $("#loading").fadeOut();
    $("#loading")
      .delay(350)
      .fadeOut("slow");
  });

  /* ---------------------------------------------- /*
* Animated scrolling / Scroll Up
/* ---------------------------------------------- */

  $('a[href^="#"]').on("click", function(e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top
        },
        1000
      );
    e.preventDefault();
  });

  $("#scroll-up").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
      $(".scroll-up").fadeIn();
    } else {
      $(".scroll-up").fadeOut();
    }
  });

  /* ---------------------------------------------- /*
* Navbar
/* ---------------------------------------------- */

  $(".header").sticky({
    topSpacing: 0
  });

  $("body").scrollspy({
    target: ".navbar-custom",
    offset: 70
  });

  /* ---------------------------------------------- /*
* Background image.
/* ---------------------------------------------- */

  $(".js-height-full").height($(window).height());

  $(window).resize(function() {
    $(".js-height-full").height($(window).height());
  });

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $("#home").css({ "background-attachment": "scroll" });
  } else {
    $("#home").parallax("50%", 0.1);
  }

  /* ---------------------------------------------- /*
* Twitter
/* ---------------------------------------------- */

  $(".testimonials").owlCarousel({
    singleItem: true,
    navigation: false,
    pagination: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    autoPlay: 5000,
    navigationText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ]
  });

  /* ---------------------------------------------- /*
* Initialize shuffle plugin
/* ---------------------------------------------- */

  var $portfolioContainer = $(".list-items-container");

  $("#filter li").on("click", function(e) {
    e.preventDefault();

    $("#filter li").removeClass("active");
    $(this).addClass("active");

    var group = $(this).attr("data-group");
    var groupName = $(this).attr("data-group");

    $portfolioContainer.shuffle("shuffle", groupName);
  });

  // $(document).ready(function() {

  // $('.simple-ajax-popup').magnificPopup({
  // 	type: 'image',
  // 	gallery:{enabled:true}
  // });

  // });

  /* ---------------------------------------------- /*
* WOW Animation When You Scroll
/* ---------------------------------------------- */



  /* ---------------------------------------------- /*
* A jQuery plugin for fluid width video embeds
/* ---------------------------------------------- */


})(jQuery);

let listItems = [...document.querySelectorAll(".alternative-intro")];
let num = 0;

function changeTitle() {
  if (num === listItems.length) {
    num = 0;
    listItems[4].classList.remove("active");
    window.setTimeout(listItems[num].classList.add("active"), 500);
  } else {
    if (num > 0) {
      listItems[num - 1].classList.remove("active");
    } else {
      listItems[0].classList.remove("active");
    }
    window.setTimeout(listItems[num].classList.add("active"), 500);
  }
  num++;
}

window.setInterval(changeTitle, 2500);
