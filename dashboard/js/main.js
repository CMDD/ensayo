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

    $(".widget .title").click(function(){
        $(this).next().slideToggle(300, function(){
            $(this).parent().toggleClass('active', $(this).is(':visible'));
        });
    });

    /**
     Scripts de configuración
    **/
    $('.widget.sections').on('click', '.add:not(.disabled)', function(){

        var box_html = $('<div class="child temp"><div><input type="checkbox"></div><div><input type="text"></div><div class="save disabled"><svg xmlns="http://www.w3.org/2000/svg" width="18" fill="#09ab51" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg></div></div>');
        box_html.hide();
        $(this).before(box_html);
        box_html.fadeIn(300);
        $(this).addClass('disabled');

    });

    $('.widget.sections').on('click', '.save:not(.disabled)', function(){

        var value = $(this).parent().find('input[type=text]').val();
        var check = $(this).parent().find('input[type=checkbox]');
        var checked = check.is(":checked") ? ' checked' : '';

        $(this).parent().next().removeClass('disabled');
        $(this).parent().replaceWith('<div class="child"><label><input type="checkbox"'+ checked +'>'+ value +'</label><span class="delete"></span></div>');

    });

    $('.widget.sections').on('keyup', '.temp input[type=text]', function(){

        var tmpval = $(this).val();

        if(tmpval == '') {
            $(this).parent().next().addClass('disabled');
        } else {
            $(this).parent().next().removeClass('disabled');
        }

    });

    if ($('.slide-editor').length){

        $('.slide').slick({
            accessibility: false,
        });

        $( '.inputfile' ).each( function() {

            var label = $(this).next('label'),
                options = $(this).parent().parent().find('.options, .save');

            $(this).on( 'change', function( e ) {

                var fileName = '';

                if( e.target.value ) {

                    fileName = e.target.value.split( '\\' ).pop();
                    label.find( 'span' ).html(fileName);

                    options.fadeIn();

                }
            });

        });

        $("input.show-btn").click(function () {

            var inputs = $(this).parent().parent().find('.inputs');
            $(this).is(':checked') ? inputs.addClass('show') : inputs.removeClass('show')

        });
    }

});
