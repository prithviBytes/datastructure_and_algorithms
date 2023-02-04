function maxSubArraySum_0n2(arr, num) {
    if(arr.length < num){
        return null;
    }
    let max = -Infinity;
    for(let i = 0; i <= arr.length - num; i++){
        let temp = 0
        for(let j = 0; j < num; j++){
            temp += arr[i + j];
        }
        if (temp > max){
            max = temp;
        }
    }
    return max;
}


function maxSubArraySum_0n(arr, num){
    if (arr.length < num) {
        return null;
    }
    let max = 0;
    for(let i = 0; i < num; i++){
        max += arr[i];
    }
    for(let i = num; i < arr.length; i++){
        let temp = max + arr[i] - arr[i - num]
        if(temp > max){
            max = temp;
        }
    }
    return max
}

