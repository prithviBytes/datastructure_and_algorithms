

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

let words = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']