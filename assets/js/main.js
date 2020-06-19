// personal data page started
$(document).ready(function () {
  // $('.main i').on('mouseenter mouseleave', function () {
    $('.main i').on('click', function () {
    $('input').toggleClass('active');
    if ($('input').hasClass('active')) {
      $(this).attr('class', "fa fa-eye fa-lg")
        .prev('input').attr('type', "text");
    } else {
      $(this).attr('class', "fa fa-eye-slash fa-lg")
        .prev('input').attr('type', 'password');
    }
  });
});

// upload-img 
$('.file-input').change(function () {
  var curElement = $(this).parent().parent().find('.image');
  console.log(curElement);
  var reader = new FileReader();

  reader.onload = function (e) {
    // get loaded data and render thumbnail.
    curElement.attr('src', e.target.result);
  };

  // read the image file as a data URL.
  reader.readAsDataURL(this.files[0]);
});



// personal data page end
// nave bar responsive humpurger 
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});


// fixed nav bar
window.onscroll = function () {
  myFunction()
};

// Get the navbar
var navbar = document.querySelector(".navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("header--fixed")
  } else {
    navbar.classList.remove("header--fixed");
  }
}

// active class on scroll
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 2
    }, 500, 'swing', function () {
      window.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('.nav-links li a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.nav-links li').removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
