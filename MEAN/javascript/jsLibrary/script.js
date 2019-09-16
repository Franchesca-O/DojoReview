var _ = {
    map: function(arr,callback) {
        const newArr = [];
        for(num in arr){
            newArr.push(callback(arr[num]));
        }
        return newArr
    },
    reduce: function(arr,callback){
        const memo = 0;
        for(num in arr){
           var hello =callback(arr[num])
        }
       return hello; 
    },
    find: function(arr,callback) {   
        const newArr = [];
        for (num in arr){
            if (callback(arr[num])){
            var first = arr[num];
            return first
            }
        } 
    },
    filter: function (arr, callback) { 
      const tempArray = [];
      for(num in arr){
          if(callback(arr[num])){
              tempArray.push(arr[num])
          }
      }
      return tempArray;
    },
    reject: function(arr, callback) {
        const newArr = [];
        for(num in arr){
            if(!(callback(arr[num]))){
                newArr.push(arr[num]);
            }
        }
        return newArr
    }
}
 // you just created a library with 5 methods!


var mapping = _.map([1,2,3], function(num){return num * 3;});
console.log(mapping)

var reducing = _.reduce([1,2,3], function(num){return num += num;});
console.log(reducing)

var finding = _.find([1,2,3,4,5,6], function(num){return num % 3 == 0;});
console.log(finding)

var rejection = _.reject([1,2,3,4,5,6,7], function(num){return num % 2 == 0;});
console.log(rejection)

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); 