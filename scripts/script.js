$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

window.addEventListener('scroll', function() {
    const logo = document.querySelector('.logo'); // Adjust the selector to target your logo
    
    if (window.scrollY > 10) { // Change 50 to the scroll threshold
        logo.src = '../img/logo_wb_small.svg'; // Path to the logo to use after scrolling
        // console.log(window.scrollY);
    } else {
        logo.src = '../img/logo_small.svg'; // Path to the original logo
    }
  });






