$(document).ready(function (){
    var key = '&APPID=75d660e807f79a31027370893c19a232';
    $('form').submit(function()
        {$('#results').children().remove();
        var city = ($('#search').val());
        $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}${key}&units=imperial`, function(res){
            var temp = res.main.temp
            $('#results').append(
                `<h1>${city}</h1><h2>Temperature: ${temp}</h2>`
            )
        });



        return false;
    })
    








    
});