$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

'use strict';

// grabbing the class names from the data attributes
var navBar = $('.navbar'),
    data = navBar.data();

var home = document.getElementById("homeNav"),
    about = document.getElementById("aboutNav"),
    what = document.getElementById("whatNav"),
    products = document.getElementById("productsNav"),
    research = document.getElementById("researchNav"),
    contact = document.getElementById("contactNav");


// booleans used to tame the scroll event listening a little..
var scrolling = false,
    scrolledPast = false;

// transition Into
function switchInto() {
  // update `scrolledPast` bool
  scrolledPast = true;
  // add/remove CSS classes
  navBar.removeClass(data.startcolor);
  navBar.addClass(data.intocolor);
  console.log('into transition triggered!');
};

// transition Start
function switchStart() {
  // update `scrolledPast` bool
  scrolledPast = false;
  // add/remove CSS classes
  navBar.addClass(data.startcolor);
  navBar.removeClass(data.intocolor);
  console.log('start transition triggered!');
}

function pressedHome() {
  home.style.color = "#FCC72C";
  about.style.color ="white";
  what.style.color ="white";
  products.style.color ="white";
  research.style.color ="white";
  contact.style.color ="white";
};

function pressedAbout() {
  about.style.color ="#FCC72C";
  home.style.color = "#848484";
  what.style.color = "#848484";
  products.style.color ="#848484";
  research.style.color ="#848484";
  contact.style.color ="#848484";
};

function pressedWhat() {
  what.style.color ="#FCC72C";
  about.style.color = "#848484";
  products.style.color = "#848484";
};

function pressedProducts() {
  products.style.color ="#FCC72C";
  what.style.color = "#848484";
  research.style.color = "#848484";
};

function pressedResearch(){
  research.style.color ="#FCC72C";
  products.style.color = "#848484";
  contact.style.color = "#848484";
};

function pressedContact(){
  contact.style.color ="#FCC72C";
  research.style.color = "#848484";
};

// set `scrolling` to true when user scrolls
$(window).scroll(function () {
  return scrolling = true;
});

setInterval(function () {
  // when `scrolling` becomes true...
  if (scrolling) {
    // set it back to false
    scrolling = false;
    // check scroll position
    if ($(window).scrollTop() > 700) {
      // user has scrolled > 100px from top since last check
      if (!scrolledPast) {
        switchInto();
      }
    } else {
      // user has scrolled back <= 100px from top since last check
      if (scrolledPast) {
        switchStart();
      }
    };

    if ($(window).scrollTop() < 700) {
      pressedHome();

    } else if ($(window).scrollTop() < 1800) {
      pressedAbout();

    } else if ($(window).scrollTop() < 2615) {
      pressedWhat();

    } else if ($(window).scrollTop() < 3430) {
      pressedProducts();

    } else if ($(window).scrollTop() < 4610) {
      pressedResearch();

    } else{
      pressedContact();

    };
  };
  // take a breath.. hold event listener from firing for 100ms
}, 50);
