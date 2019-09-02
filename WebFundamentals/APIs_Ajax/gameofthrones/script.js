$(document).ready(function(){
    $ ('img').click(function(){
        $('#details').children('p').remove();
        var house = this.id;
        $.get(`https://www.anapioficeandfire.com/api/houses/${house}`, function(res){
        var spaced = res.titles.join(", ");
            $('#details').append(
                `<p>Name: ${res.name}</p><p>Words: ${res.words}</p>
                <p>Titles: ${spaced}</p>`
            )        
        });
    });
});