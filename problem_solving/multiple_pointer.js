
// Pointer on left and right side, Since its sorted
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right]
        if( sum === 0) {
            return [arr[left],arr[right]]
        } else if ( sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

function countUniqueValues_approachOne(arr) {
    let p1 = 0;
    let p2 = 1;
    let uniqueValues = 1;
    while (p2 < arr.length) {
        if (arr[p1] !== arr[p2]){
            uniqueValues++;
        }
        p1++;
        p2++;
    }
    return uniqueValues;
}


function countUniqueValues(arr) {
    let i = 0;
    let j = 1;
    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] === arr[j];
        }
        j++;
    }
    return i + 1;
}

console.log(countUniqueValues([1,1,1,2,3,4,5]))