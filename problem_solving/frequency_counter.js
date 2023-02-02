function validAnagram(stringOne, stringTwo){
    
    if(stringOne.length !== stringTwo.length){
        return false;
    }
    
  let frequencyInStringOne = {}
  
  for(const character of stringOne){
      if(character in frequencyInStringOne){
          frequencyInStringOne[character]++;
      } else {
          frequencyInStringOne[character] = 1;
      }
  }
  
  for(const character of stringTwo){
      if(!frequencyInStringOne[character]){
          return false;
      } else {
        //   if (frequencyInStringOne[character] === 1){
        //       delete frequencyInStringOne[character]
        //   } else {
        //       frequencyInStringOne[character]--;
        //   }
        //Alternatively we can use the truthy property of the primitive datastructure
        // like undefined and 0
        frequencyInStringOne[character]--;
      }
  }
  return true;
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true