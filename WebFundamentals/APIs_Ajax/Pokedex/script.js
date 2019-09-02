$(document).ready(function(){
    var num = ""
    for (var i = 0; i < 151; i++){ 
        $('#images').append(
           `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png">`);
    }
    $(document).on('click', 'img', function(){
        var link = ($(this)[0]['src']);
        var num = link.replace(/[^0-9]/g,'');
        $.get(`http://pokeapi.co/api/v2/pokemon/${num}`, function(res){
            $('#info').children().remove();
            var name = res.name;
            var types = [];
            for (var i =0; i< res.types.length; i++){
                types.push(res.types[i].type.name);
            }
            var height = res.height
            var weight = res.weight;
            $('#info').append(
                `<h1 id='name'>${name}</h1>`);
            $('#info').append(
                `<img id="info_pic" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${num}.png">`);      
            $('#info').append(
                `<ul id="list"><h3>Types</h3></ul.`);
            for (var i = 0; i < types.length; i++){
                $('#list').append(
                    `<li>${types[i]}</li>`);
            };
            $('#info').append(
                `<h3>Height</h3><p id='height'>${height}</p`);

            $('#info').append(
                    `<h3>Weight</h3><p id='weight'>${weight}</p`);    
        
        
        
            });
      
    })


})


