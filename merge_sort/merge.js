

function merge(arr1, arr2){
    let response = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length){
        if(arr1[i] > arr2[j]){
            response.push(arr2[j]);
            j++;
        } else {
            response.push(arr1[i])
            i++;
        }
    }
    while (i < arr1.length){
        response.push(arr1[i]);
        i++;
    }
    while (j < arr2.length){
        response.push(arr2[j]);
        j++;
    }
    return response;
}

console.log(merge([1,2,3,45,89], [23,45,67,78,89,99]))