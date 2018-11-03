(function ($) {


    function scrollTo(target, offset) {
        if (target.length) {
            $("html, body").stop().animate({
                scrollTop: target.offset().top - 60 + offset
            }, 1500);

        }
    }

    $(document).ready(function(){

        $( document ).on( "mobileinit", function() {
            $.mobile.loader.prototype.options.disabled = true;
        });


        $('.install').on('tap', function () { scrollTo($('.section-install'), 500)})
        $('.getstarted').on('tap', function () { scrollTo($('.section-documentation'), 0)})
        $('.source').on('tap', function () { scrollTo($('.section-source'), 0)})
        $('#logo').on('tap', function () { scrollTo($('.header'), 0)})


    });

})(jQuery);
