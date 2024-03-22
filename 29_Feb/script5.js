// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
//Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
//Example string : 'The quick brown fox

//initiate count =0
//apply loop on the string
//if the vowel is found in the iteration ; then increment count
//if (singleElement === "a" ||)


function countVowels(str) {
    const lowercaseStr = str.toLowerCase();
  
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    let vowelCount = 0;
  
    for (let i = 0; i < lowercaseStr.length; i++) {
      if (vowels.includes(lowercaseStr[i]) && lowercaseStr[i] !== 'y') {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  const exampleString = 'The quick brown fox';
  const result = countVowels(exampleString);
  console.log(result); // Output: 5
  
  