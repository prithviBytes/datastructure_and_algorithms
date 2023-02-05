function flatten(arr){
    let flattenedArray = [];

    function helper(inputArr){
        if(inputArr.length === 0)return;
        if(Array.isArray(inputArr[0])) return helper(inputArr[0]), helper(inputArr.slice(1));
        flattenedArray = [...flattenedArray, inputArr[0]];
        return helper(inputArr.slice(1))
    }

    helper(arr);
    return flattenedArray;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

// console.log([[5]].length)