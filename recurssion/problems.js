
function power(base, exponent){
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

function factorial(num){
    if ( num === 0 ) return 1;
    return num * factorial(num - 1);
}

function productOfArray(arr){
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRang(num){
   let result = 0;
   
   function helper(input){
    if (input === 0) return 0;
    result += input;
    return helper(input - 1);
   }
   helper(num);
   console.log(result);
}

// 1, 1, 2, 3, 5, 8,
function fib(num){
    if (num === 0) return 0;
    if( num === 1 || num === 2) return 1;
    return fib(num - 1) + fib(num - 2)
}
