function capitalizeFirst (arr) {

    let response = [];
    function helper(inputArr){
        if(inputArr.length === 0) return;
        response.push(`${inputArr[0][0].toUpperCase()}${inputArr[0].slice(1)}`)
        return helper(inputArr.slice(1));
    }
    helper(arr);
    return response;
}

console.log(capitalizeFirst(['car','taco','banana']))