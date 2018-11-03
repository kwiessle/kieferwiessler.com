(function ($) {

// $.mobile.loadingMessage = false;

    function scrollTo(target) {
        if (target.length) {
            $("html, body").stop().animate({
                scrollTop: target.offset().top - 60
            }, 1500);

        }
    }

    function intelligentMenu() {
           if ($(document).scrollTop() < 10) {
               $('.menu').css('background', 'transparent')
               $('.menu').css('border-color', 'transparent')
           }
           else  {
               $('.menu').css('border-color', '#222222')
               $('.menu').css('background', 'rgba(18, 18, 18, 0.95)')
               $('.menu').css('transition-duration', '.7s');
           }
       }

    $(document).ready(function(){

        $( document ).on( "mobileinit", function() {
            $.mobile.loader.prototype.options.disabled = true;
        });

        intelligentMenu();

        $(document).scroll(function () {
           intelligentMenu();
        });

        $('.about').on('tap', function () { scrollTo($('.section-resume'))})
        $('.works').on('tap', function () { scrollTo($('.section-timeline'))})
        $('.contact').on('tap', function () { scrollTo($('.section-contact'))})
        $('#logo').on('tap', function () { scrollTo($('.header'))})
        $('.fa-weixin').on('tap', function() { $('.qr-code').fadeIn(700)})
        $('.close').on('tap', function() { $('.qr-code').fadeOut(700)})

    });

})(jQuery);
