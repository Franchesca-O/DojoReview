

function rangePrint(a, b , c = 1){
    if (b == undefined){
        b = a;
        a = 0;
    }
    {for (var i = a; i < b; i+= c){
    console.log(i)
    }
}
}

rangePrint(2,10,2)

rangePrint(-10,0,2)

rangePrint(4,8)

rangePrint(4);
