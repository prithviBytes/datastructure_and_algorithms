

function capitalizeWords(arr) {
    let output = [];

    function helper(inputArr){
        if(inputArr.length === 0)return;
        output.push(inputArr[0].toUpperCase());
        return helper(inputArr.slice(1));
    }

    helper(arr);
    return output;
}


function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
}

let words = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']