$(document).ready(function() {
    
   $('.js--section--curious').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    $('.js--scroll-to-curious').click(function () {
       $('html, body').animate({scrollTop: $('.js--section--curious').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-form').click(function () {
       $('html, body').animate({scrollTop: $('.js--section--form').offset().top}, 1000); 
    });
    
});