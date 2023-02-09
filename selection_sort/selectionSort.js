

const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    return arr;
}

function selectionSort(arr){
    for(let i=0; i < arr.length; i++){
        let min = i;
        for(let j=i + 1; j < arr.length; j++){
            if(arr[min] > arr[j]){
                min = j;
            }
        }
        if(i !== min){
            arr = swap(arr, min, i);
        }
    }
    return arr;
}

console.log(selectionSort([23,12,43,6,3,6,2,121,75]))