// var students = [ 
//     {first_name:  'Michael', last_name : 'Jordan'},
//     {first_name : 'John', last_name : 'Rosales'},
//     {first_name : 'Mark', last_name : 'Guillen'},
//     {first_name : 'KB', last_name : 'Tonel'}
// ]

// function output(arr){
//     for(var i = 0; i< arr.length; i++){
//         console.log(arr[i].first_name+" "+arr[i].last_name);
//     }
// }
// var names = output(students);
var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
    }

//     console.log(users.Students[0].first_name);


function extract(dic){
    for(var i = 0; i < Object.keys(dic).length; i++){
        var key = (Object.keys(dic)[i]);
        console.log(key)
        var value = dic[key]
        for (var k = 0; k < value.length; k++){
            var first_name = value[k].first_name;
            var last_name = value[k].last_name;
            var strLength = first_name.length + last_name.length;
            console.log((k+1) + " - " + first_name + last_name + " - " + strLength);
        }
    } 
}

extract(users);

