


//var val = "<?php echo $val ?>";



const queryString = window.location.search;
console.log("urll data"+queryString);
clicked_id=queryString.slice(1);
var title = 'Jobs in '+clicked_id;
console.log("you clicked on"+clicked_id);

var request = new XMLHttpRequest();
request.open("GET", "/JobWebScrapping/CombinedResults/allResults.json", false);
request.send(null);
request.onreadystatechange = function() {
 if ( request.readyState === 4 && request.status === 200 ) {
   console.log('HELOOO');
   var my_JSON_object = JSON.parse(request.responseText);
   y=my_JSON_object[0].title;
   
   var distinct = [];
   
   console.log(my_JSON_object.length);
   for (var i = 0; i < my_JSON_object.length; i++){
    var a=my_JSON_object[i].location;
    var cities=a.split(',');
    
     for(var j=0; j<cities.length;j++){
       var trimmed=cities[j].trim();
      if (trimmed == clicked_id){
        distinct.push(my_JSON_object[i]);
      }
     }
   }
  


var x ="", i;
console.log("my lengthhh"+distinct.length);
for (i=0; i<distinct.length; i++) {
 x = x +
 
 '<div class="col-md-4">'+
 '<a href="#">'+
 '<div class="card">'+
 '<h1 id="job-tit">'+distinct[i].title+'</h1>'+
   '<div class="card-content">'+
     ' <a id="apply-now" href="'+distinct[i].applylink+'"> Apply now! </a>'+
     '<p></p>'+
     '<h1 class="company">'+distinct[i].companyname+'</h1>'+

     '<p class="jd">'+distinct[i].jd+'</p>'+
     '<h2>Skills : '+distinct[i].skills+' </h2>'+
     
     '<div class="card-meta">'+
       '<p class="card-date"><i class="fa fa-clock-o" aria-hidden="true"></i><span>Posted '+distinct[i].created+'</span></p>'+
       '<ul class="card-social">'+
       '</div>'+
   '</div>'+
 '</div>'+
 '</a>'+
'</div>';
}


document.getElementById("demo2").innerHTML = x;

document.getElementById("demo4").innerHTML = title;




  
 }
}


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
