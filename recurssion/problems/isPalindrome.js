

function reverseString(str){
    let reverse = "";
    if(str.length === 0) return "";
    return reverse.concat(str[str.length - 1], reverseString(str.slice(0,str.length - 1)))
}

function isPalindrome(str){
    let reverse = reverseString(str);
    if(reverse === str) return true;
    return false;
}


function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

