
function reverseString(str){
    let result = "";

    function helper(input){
        if(input.length === 0) return;
        result += input[input.length - 1]
        return helper(input.slice(0,input.length - 1))
    }
    helper(str);
    return result;
}

console.log(reverseString("Prithvi"))