var $ = jQuery;

$.support.transition = false;

$(document).ready(function () {

    if ($('.slide-home').length){
        $('.slide-home').slick({
            accessibility: false
        });
    }

    if ($('.news-slide').length){
        $('.news-slide').slick({
            adaptiveHeight: true,
            accessibility: false
        });
    }

    $(".menu-accordion .has-children >a").click(function (e) {

        e.preventDefault();

        var subItem = $(this).next('ul'),
            root = $(this).closest('.menu-accordion'),
            depth = $(subItem).parents().length;

        var allAtDepth = $(root).find('ul').filter(function () {
            if ($(this).parents().length >= depth && this !== subItem.get(0)) {
                return true;
            }
        });

        $(allAtDepth).slideUp(300,function() {
            $(this).parent().removeClass('opened');
        });

        subItem.slideToggle(300,function() {
            if ($(this).is(':visible')) {
                $(this).parent().addClass('opened');
            } else {
                $(this).parent().removeClass('opened');
            }
        });

    });

    $('.player').on('click', '.btn-open, .btn-close', function(){
        var container = $(this).parent().parent();
        if ( container.hasClass('opened') ) {
            container.removeClass('opened');
        } else {
            container.addClass('opened');
        }
    });

    $('.player').on('click', '.control', function(){
        var container = $(this).parents('.player');
        if ( $(this).hasClass('played') ) {
            container.find('.control').removeClass('played').addClass('paused');
        } else {
            container.find('.control').removeClass('paused').addClass('played');
        }
    });

});
