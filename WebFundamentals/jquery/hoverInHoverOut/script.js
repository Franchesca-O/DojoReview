$(document).ready(function(){
    // $('img').hover(
    //     function (){
    //         var alternate = $(this).attr('alt-src');
    //         $(this).attr('src', alternate);
    //     }, function (){
    //         var temp = $(this).attr('temp');
    //        $(this).attr('src', temp);
    // })

    $('img').hover(function(){
        var temp = $(this).attr('src');
        $(this).attr('src',$(this).attr('alt-src'));
        $(this).attr('alt-src', temp);
    });
});

