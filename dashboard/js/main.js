var $ = jQuery;

$(document).ready(function () {

    $("#nav .hide-nav").click(function (e) {
        e.preventDefault();
        $('#nav').addClass('collapsed');
        $(".topbar .show-nav").addClass('show');
    });

    $(".topbar .show-nav").click(function (e) {
        e.preventDefault();
        $('#nav').removeClass('collapsed');
        $(this).removeClass('show');
    });

    $(".dropdown .open").click(function () {
        var content = $(this).next();
        if ( content.is(":visible") ) {
            content.fadeOut(300);
        } else {
            content.fadeIn(300);
        }
    });

    $(document).click(function(e){
        var container = $('.dropdown');
		if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.find('.dropdown-content').fadeOut(300);
        }
    });

});
