const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(obj){
    let response = [];

    for(const k in obj){
        if(typeof obj[k] === 'string'){
            response.push(obj[k]);
        } else if (typeof obj['object'] && !Array.isArray(obj[k])){
            let temp = collectStrings(obj[k]);
            response = [...response, ...temp];
        }
    }
    return response;
}

console.log(collectStrings(obj));