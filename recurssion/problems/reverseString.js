
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

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

console.log(reverseString("Prithvi"))