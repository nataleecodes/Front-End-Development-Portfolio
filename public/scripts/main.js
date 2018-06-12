"use strict";

console.log("js file loads");

$(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery’s animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// let menuBtn = document.querySelector('#menuBtn');
// let menu = document.querySelector('.menu');
// let menuLink = document.querySelectorAll('.menu__link');

// menuBtn.addEventListener('click', function () {
//     menu.classList.toggle('show');
// });

// menuLink.forEach(function (item) {
//     item.addEventListener('click', function () {
//         menu.classList.toggle('show');
//     });
// });

var showMenu = false;
$('.hamburger').on('click', function (e) {
    console.log("hamburger has been clicked!");
    if (showMenu) {
        $('.fas').removeClass('fa-times').addClass('fa-bars');
        $('.menu').fadeOut();
        showMenu = false;
    } else {
        $('.fas').removeClass('fa-bars').addClass('fa-times');
        $('.menu').fadeIn();
        showMenu = true;
    }
});

// On click, toggle show

// $(function () {
//     let active = false;
//     $('.hamburger').click(function (e) {
//         if (active) {
//             $('.ya').addClass('fa-bars').removeClass('fa-times');
//             $('.header__nav--responsive').fadeOut();
//             active = false;
//         } else {
//             $('.ya').addClass('fa-times').removeClass('fa-bars');
//             $('.header__nav--responsive').fadeIn();
//             active = true;
//         }
//     });
//     $('.ul__responsive>li').on('click', () => {
//         $('.ya').addClass('fa-bars').removeClass('fa-times');
//         $('.header__nav--responsive').fadeOut();
//         active = false;
//     })
// });

// <label for="toggle" class="hamburger">
//     <i class="fas fa-bars ya"></i>
// </label>
// .header__nav--responsive {
//     display: none;
// }