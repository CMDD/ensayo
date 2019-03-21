var $ = jQuery;

$(document).ready(function () {

    /** MOSTRAR OCULTAR PANEL **/
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

    /** MENU DE USUARIO **/
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

    /** WIDGETS **/
    $(".widget .title").click(function(){
        $(this).next().slideToggle(300, function(){
            $(this).parent().toggleClass('active', $(this).is(':visible'));
        });
    });

    /** IMAGEN DESTACADA **/
    $( '.image .inputfile' ).each( function() {

        var label = $(this).next('label'),
            options = $(this).parent().parent().find('.options, .save');

        $(this).on( 'change', function( e ) {

            var fileName = '';
            if( e.target.value ) {
                fileName = e.target.value.split( '\\' ).pop();
                label.find( 'span' ).html(fileName);
                options.fadeIn(300);
            }
        });

    });

    /** CONFIGURACIÓN **/

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
                    options.fadeIn(300);
                }

            });

        });

        $("input.show-btn").click(function () {

            var inputs = $(this).parent().parent().find('.inputs');
            $(this).is(':checked') ? inputs.addClass('show') : inputs.removeClass('show')

        });
    }

});
