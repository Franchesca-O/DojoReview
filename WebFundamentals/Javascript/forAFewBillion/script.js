var account = 0.01;

for(var i = 2; i <31; i++){
account *= 2;
}
console.log("The amount at the day of 30 days is: $" + account)


var account = 0.01;

for(var i = 2; i <31; i++){
account *= 2;
if(account>= 10000){
    break;
}
}
console.log("It will take " + i + " days to save more than $10,000. $" +account + ", actually")

var account = 0.01;

for(var i = 2; i <150; i++){
    account *= 2;
    if(account>= 1000000000){
    break;
    }
}
console.log("It will take " + i + " days to save more than $1 billion. $" +account + ", actually.")


var account = 0.01;

for(var i = 2; i <1000000; i++){
account *= 2;
if(account === Infinity){
    console.log(account)
    console.log(i)
    break;
    }
}