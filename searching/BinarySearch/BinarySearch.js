

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.round((right + left)/2);
    while(arr[mid] !== target && left <= right){
        if(arr[mid] > target){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        mid = Math.round((right + left)/2);
    }
    return arr[mid] === target ? mid : -1;
}