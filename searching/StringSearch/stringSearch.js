
function stringSearch(text, pattern){
    let count = 0;
    for(let i = 0; i < text.length; i++){
        for(let j = 0; j < pattern.length; j++){
            if(text[i + j] === pattern[j]){

            } else {
                break;
            }
            if(j === pattern.length - 1) count++;
        }
    }
    return count;
}