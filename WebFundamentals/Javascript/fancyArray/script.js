var array = ["James", "Jill", "Jane","Jack"]
var anotherArray = ["Franchesca", "Paola", "Bailey", "Ollie"]

function printArray(arr, a = "->", reversed){
    if(reversed == true){
        for( var i = arr.length-1; i >= 0; i--){
            console.log(i+a+arr[i]);
        }
    }
    else { 
        for (var i = 0; i < arr.length; i++){
        console.log(i+a+arr[i]);
    }
}
}

// printArray("-------")
// printArray("->")
// printArray("=>")
// printArray("::")

printArray(anotherArray,"-->",true);
printArray(anotherArray,"---");
