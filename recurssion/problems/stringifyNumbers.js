let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

function stringifyNumbers(obj){
    let response = {};
    for(const k in obj){
        let temp = obj[k];
        if(typeof obj[k] === 'number'){
            temp = JSON.stringify(obj[k]);
        } else if(typeof obj[k] === 'object' && !Array.isArray(obj[k])){
            temp = stringifyNumbers(obj[k])
        }
        response[k] = temp;
    }
    return response;
}

console.log(stringifyNumbers(obj));