$(document).ready(function(){
    
    $('form').submit( function(){
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var email = $('#email').val();
        var num = $('#num').val();
        
        $('table > tbody').append(
            "<tr><td>"+fname+"</td><td>"+lname+"</td><td>"+email+"</td><td>"+num+"</td></tr>");
        return false;
    }
)
});

//coding dojo code below
// $(document).ready(function() {

//     $('#submit').click(function() {
//         $('table').append('<tr><td>' + $('input[name="first_name"]').val() + '</td><td>'
//             + $('input[name="last_name"]').val() + '</td><td>'
//             + $('input[name="email"]').val() + '</td><td>'
//             + $('input[name="phone_number"]').val() + '</td></tr>');
//         return false;
//     });
// });
