function containsEveryVowel(str) {
    const vowels = ['a','e','i','o','u']
    for(let vowel of vowels){
        if(!str.includes(vowel)){
            return false
        }
    }
    return true
}


// vowelFrequency('hi apples')

function vowelFrequency(str) {
    let obj = {};
    let vowels = 'aeiou';
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        if (obj[str[i]]) {
          obj[str[i]]++;
        } else {
          obj[str[i]] = 1;
        }
      }
    }
    return obj;
  }
