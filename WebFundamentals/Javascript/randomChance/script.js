quarters = Math.floor(Math.random() * 50)+ 50
console.log(quarters)

function playingSlots(quarters,goal){
    for(var i = quarters; i >= 0; i-- ){ 
        console.log("i have this many quarters " + i)    
        var myLuckyNum = Math.floor(Math.random()* 100);
        console.log("luckyNum "+myLuckyNum);
        var slotNum = Math.floor(Math.random()* 100);
        console.log("slotNum "+slotNum);
        if (myLuckyNum == slotNum){
            var iHad = i;
            i +=50;
            console.log("I had " + iHad + " quarters. I won and now have "
            +i+" quarters!")        
        }
        if (i >= goal){
            console.log("I'm a winner. Enough for today!")
            break;
        }
        if(i == 0){
            console.log("I ran out of quarters")    
        }
    }
}
playingSlots(quarters,100)