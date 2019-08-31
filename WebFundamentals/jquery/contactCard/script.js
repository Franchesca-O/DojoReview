$(document).ready(function(){
    $('form').submit( function(){
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var description = $('#description').val();
        $('#wall').append(
            "<div class='box'><div><h2>"+fname+"&nbsp;"+lname+"</h2><p>Click for description</div><h2 class='back'>"+description+"</h2></div>");
            return false;
    });
    $(document).on('click',".box", function(){
        // var description = $('#description').val();
        // $(this).replaceWith("<h2 class='box'>"+description+"</h2>");
        $(this).children().toggle();
    })





});