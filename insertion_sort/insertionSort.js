

const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    return arr;
}

function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++){
        let currentValue = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentValue; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentValue;
    }
    return arr;
}

console.log(insertionSort([23,12,43,6,3,6,2,121,75]))