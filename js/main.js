var $ = jQuery;

$.support.transition = false;

$(document).ready(function () {

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

});
