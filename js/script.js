/**
 * Created by liya on 16/8/24.
 */

/*
$(document).ready(function () {
    $('.results > li').show();
    $('.obst').hide();

    $('#filter').find('input:checkbox').click(function () {
        $('.results > li').hide();
        $('#filter').find('input:checked').each(function () {
            $('.results > li.' + $(this).attr('rel')).show();

        });
    });
});

    */

$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        if($(this).attr("value")=="fleisch"){
            $(".fleisch").toggle();
        }
        if($(this).attr("value")=="obst"){
            $(".obst").toggle();
        }
        if($(this).attr("value")=="gemuese"){
            $(".gemuese").toggle();
        }
    });
});
