$(document).ready(function(){
    $('#clicker').click(function(){
        alert("I clicked the button");
    });

    $('#hiding').click(function(){
        $('#show_hide').hide();
    });

    $('#show').click(function(){
        $('#show_hide').show();
    });

    $('#toggle').click(function(){
        $('#togglep').toggle();
    })

    $('#sliderd').click(function (){
    if ($('#slider').is(":hidden")){
        $('#slider').slideDown("slow");
    } else {
        $('#slider').slideUp("slow");
    }
    });

    $('#stoggler').click(function(){
        $('#slideToggle').slideToggle("slow");
    });

    $('#fade').click(function(){
        $('#fadeIn').fadeIn("slow");
    });

    $('#fadeO').click(function(){
        $('#fadeOut').fadeOut("slow");
    });

    $('#addClass').click(function(){
        $('#addClass').addClass("colorClass")
    });

    $('#addBefore').click(function(){
        $('#addBefore').before("<p>Hello World</>")
    });

    $('#addAfter').click(function(){
        $('#addAfter').after("<p>Hello World After</>")
    });

    $('#append').append("World!");

    $('#htmlb').click(function(){
        $('#html').html("hello again");
    });

    $('input').keyup(function(){
        var value = $( this ).val();
        $('#value').text(value);
    })
    
    var str = $( "#text1" ).text();
    $( "#text2" ).html( str );

    $("#attributeb").click(function(){
        $("#attribute").attr("style", 'background-color: blue');
      });





    
















})