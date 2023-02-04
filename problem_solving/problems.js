function sameFrequency(numOne, numTwo) {
  numOne = numOne.toString();
  numTwo = numTwo.toString();
  if (numOne.length !== numTwo.length) {
    return false;
  }
  let frequencyOfNumOne = {};
  for (const char of numOne) {
    if (char in frequencyOfNumOne) {
      frequencyOfNumOne[char]++;
    } else {
      frequencyOfNumOne[char] = 1;
    }
  }
  for (const char of numTwo) {
    if (!frequencyOfNumOne[char]) {
      return false;
    } else {
      frequencyOfNumOne[char]--;
    }
  }
  return true;
}

function areThereDuplicates_usingFrequencyCounter() {
  let lookup = {};
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] in lookup) {
      return true;
    } else {
      lookup[arguments[i]] = "";
    }
  }
  return false;
}

function averagePair_usingMultiplePointer(arr, target) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let currentAverage = (arr[i] + arr[j]) / 2;
    if (currentAverage === target) {
      return true;
    } else if (currentAverage > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}

//Space complexity below is O(N+M)
function isSubsequence_usingMultiplePointer(stringOne, stringTwo) {
  let main = stringOne + stringTwo;
  let i = 0;
  let j = stringOne.length;
  while (j < main.length) {
    if (main[i] === main[j]) {
      i++;
    }
    j++;
    if (i === stringOne.length - 1) {
      return true;
    }
  }
  return false;
}

// With Space complexity 0(1)
function isSubsequence_usingMultiplePointer(stringOne, stringTwo) {
  let i = 0;
  let j = 0;
  while (j < stringTwo.length) {
    if (stringOne[i] === stringTwo[j]) {
      i++;
    }
    if (i === stringOne.length) {
      return true;
    }
    j++;
  }
  return false;
}

function maxSubarraySum_usingSlidingWindow(arr, count) {
  if (arr.length < count) {
    return null;
  }
  let max = 0;
  for (let i = 0; i < count; i++) {
    max += arr[i];
  }
  let temp = max;
  for (let i = count; i < arr.length; i++) {
    temp = temp + arr[i] - arr[i - count];
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

function minSubArrayLen(arr, num) {
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  let total = 0;
  while (start < arr.length) {
    if (total < num && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= num) {
      if (end - start < minLen) {
        minLen = end - start;
      }
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

function findLongestSubstring(str) {
  let lookup = {};
  let maxLen = -Infinity;
  let start = 0;
  for(let i = 0; i < str.length; i++){
    let currentCharacter = str[i];
    if(lookup[currentCharacter]){
      start = Math.max(start, lookup[currentCharacter]);
    }
    lookup[currentCharacter] = i + 1;
    maxLen = Math.max(maxLen, i - start + 1);
  }
  console.log(maxLen === -Infinity ? 0 : maxLen);
  return maxLen === -Infinity ? 0 : maxLen;
}


// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6