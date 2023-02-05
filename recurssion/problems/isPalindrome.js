

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
