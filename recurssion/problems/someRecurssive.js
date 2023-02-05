
function isOdd(num){
    return num % 2 !== 0 ? true : false;
}

const isEven = (num) => num % 2 === 0 ? true : false;

// Write a recursive function called someRecursive which accepts an array and a callback. 
// The function returns true if a single value in the array returns true when passed to
// the callback. Otherwise it returns false.
function someRecurssive(arr, callbackFunction){
    if (arr.length === 0) return false;
    if(callbackFunction(arr[0])){
        return true;
    }else{
        return false || someRecurssive(arr.slice(1), callbackFunction)
    }
}

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}

console.log(someRecurssive([2,2,2,2,2], isOdd))