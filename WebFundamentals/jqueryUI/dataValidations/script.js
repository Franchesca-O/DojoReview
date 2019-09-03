$(document).ready(function (){
    $( ".datepicker").each(function(){
            $(this).datepicker();
      });
      $('form').submit(function(e){
        var toDate = $('#datepicker-1').val();
        var fromDate = $('#datepicker-2').val();
        var name = $('#name').val();  
        if (name.length < 1){
            $('#name').after("<p class='error' style='color:red;display:inline-block'>&nbsp;Name must be included!</p>")
            $('#button').css('background-color','red');
        } else {   
        $(".error").remove();
        $('#button').css('background-color','silver');         
        alert ("Thanks "+name+". Your cruise leaves on "+
        toDate+"and returns on "+fromDate+"!")
        }
        return false;
    });
     
      
});



    
