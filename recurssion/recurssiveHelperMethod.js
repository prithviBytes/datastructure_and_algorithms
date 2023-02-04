function collectOddValues(arr){
    let result = [];

    function helper(input){
        if(input.length === 0) return;
        if(input[0] % 2 !== 0) result.push(input[0]);
        return helper(input.slice(1));
    }

    helper(arr);

    console.log(result);
}

collectOddValues([1,2,3,4,5,6,7,8,9,10])