var array = [1, "apple", -3, "orange", 6, 0.5];

var newArray = [];

function numbers(arr){
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] == "number"){
            newArray.push(arr[i]); 
        }
    }
}

numbers(array);
console.log(newArray)

function arrayRemove(arr){
    return arr.filter(function(ele){
        return typeof ele != "number";
    });
}
var result = arrayRemove(array, 6);
console.log(result);
