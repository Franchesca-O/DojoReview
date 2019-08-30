$(document).ready(function(){
    // alert("jquery is loaded!")
    $('img').click(function (){
        var temp = $(this).attr('src');
        var alternate = $(this).attr('data-alt-src');
        $(this).attr('temp', $(this).attr('src'));
        $(this).attr('src', alternate);
        $(this).attr('data-alt-src', temp);
    })
});