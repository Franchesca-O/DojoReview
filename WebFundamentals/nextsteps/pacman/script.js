$(document).ready(function(){
    var world = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,0,1,2,1,1,1,1,1,2],
    [2,1,1,2,1,2,1,2,1,2],
    [2,1,1,2,3,2,1,2,1,2],
    [2,1,1,2,1,2,3,2,1,2],
    [2,1,1,3,1,2,1,2,1,2],
    [2,1,1,2,1,2,1,2,1,2],
    [2,1,1,2,1,1,1,2,1,2],
    [2,1,1,2,1,1,3,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2]
];
var score = 0;

var pacman = {
    x : 1,
    y: 1
}

var ghost = {
    x : 4,
    y : 3
}

var lives = 3;


direction = 'right'

function displayWorld(){
    var output = '';
    for (var i = 0; i < world.length; i++){
        output += '\n<div class="row">\n';
        for (var j = 0; j < world[i].length; j ++){
            if (world[i][j] == 2){
                output += '<div class="brick"></div>'
            } else if (world[i][j] == 1){
                output += '<div class="coin"></div>'
            } else if (world[i][j] == 0){
                output += '<div class="empty"></div>'
            } else if (world[i][j] == 3){
                output += '<div class="cherries"></div>'
            }             

        }
        output = output + world[i][j];
        output += "</div>";
    }    
    document.getElementById("world").innerHTML = output;
}

displayWorld();

function displayPacman (){

        document.getElementById('pacman').style.top = pacman.y*50+"px";
        document.getElementById('pacman').style.left = pacman.x*50+"px";
        document.getElementById('pacman').style.transform = direction;
        
    
}
displayPacman();

function displayGhost (){
    document.getElementById('ghost').style.top = ghost.y*50+"px";
    document.getElementById('ghost').style.left = ghost.x*50+"px";
}

displayGhost();


function displayScore (){
    document.getElementById('score').innerHTML = "Score: "+score;
}

function displayLives (){
    document.getElementById('lives').innerHTML = "Lives: "+lives;
}

document.onkeydown = function (e){
    if (e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2) {
        pacman.x --;
        direction = 'rotate(180deg)'; 
    } 
    else if (e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2){ 
        pacman.x ++ ;
        direction = 'rotate(0deg)';
    } else if (e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2 ){ 
        pacman.y --;
        direction = 'rotate(270deg)'
    } else if (e.keyCode == 40&& world[pacman.y+1][pacman.x] != 2 ){ 
        pacman.y ++; 
        direction = 'rotate(90deg)'  
    }
    if (world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score+=10;
    } else if(world[pacman.y][pacman.x] == 3){
        world[pacman.y][pacman.x] = 0;
        score+=50;
    }
    if (pacman.y == ghost.y && pacman.x == ghost.x){
        score = 0
        lives -- ;
        if (lives == 0){
            location.reload();
    }

}


displayPacman();
displayWorld(); 
displayScore();
displayLives();

   

}
});