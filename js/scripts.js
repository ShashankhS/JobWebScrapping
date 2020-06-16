var request = new XMLHttpRequest();
request.open("GET", "/JobWebScrapping/CombinedResults/allResults.json", false);
request.send(null);
request.onreadystatechange = function() {
 if ( request.readyState === 4 && request.status === 200 ) {
   var my_JSON_object = JSON.parse(request.responseText);
   y=my_JSON_object[0].title;

   var distinct = [];

   console.log(my_JSON_object.length);
   for (var i = 0; i < my_JSON_object.length; i++){
    var a=my_JSON_object[i].location;
    var cities=a.split(',');

     for(var j=0; j<cities.length;j++){
       var trimmed=cities[j].trim();
      if (!distinct.includes(trimmed)){
        distinct.push(trimmed);
      }
     }
   }



//href="/JobWebScrapping/card_view.html"

var x ="", i;
for (i=0; i<distinct.length; i++) {
 x = x +
 '<a href="/JobWebScrapping/card_view.html?'+distinct[i]+'" onclick="reply_click(this.id)"'+
 '<div class="col-md-6 col-lg-4 mb-5" class="container-raks" '+
 '<div id='+distinct[i]+'  >'+
  '<div class="portfolio-item mx-auto add-pad" data-toggle="modal" data-target="#portfolioModal1">'+
    '<div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">'+
      '<div class="portfolio-item-caption-content text-center text-white">'+
        '<i class="fas fa-plus fa-3x"></i>'+
      '</div>'+
    '</div>'+

     '<img class="img-fluid" src="assets/img/portfolio/location.png" alt="" />'+
     '<div class="top-left">'+ distinct[i]+
     '</div>'+
    '</div>'+
  '</div>'+
 '</div>'+
 '</a>';
}
document.getElementById("demo").innerHTML = x;
 }
}


//  document.getElementById("open-card").onclick(function(){
//    window.location.href='card_view.html';
//  })


(function($) {
"use strict"; // Start of use strict

// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - 71)
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});

// Scroll to top button appear
$(document).scroll(function() {
  var scrollDistance = $(this).scrollTop();
  if (scrollDistance > 100) {
    $('.scroll-to-top').fadeIn();
  } else {
    $('.scroll-to-top').fadeOut();
  }
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
  target: '#mainNav',
  offset: 80
});

// Collapse Navbar
var navbarCollapse = function() {
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
  } else {
    $("#mainNav").removeClass("navbar-shrink");
  }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

// Floating label headings for the contact form
$(function() {
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });
});

})(jQuery); // End of use strict
