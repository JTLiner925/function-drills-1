/* eslint-disable no-console */


function jediName(firstName, lastName){
//   const first = firstName.slice(0,2);
//   const last = lastName.slice(0,3);
//   return `${last}${first}`;
//   can use either method...the one below is more concise
  return `${lastName.slice(0,3)}${firstName.slice(0,2)}`;
}

const jedi = jediName('John', 'Liner');
console.log(jedi);

function beyond(num){
  if(num === Number.NEGATIVE_INFINITY || num === Number.POSITIVE_INFINITY){
    console.log('And beyond');
  } else if (Number.isFinite(num) && num > 0){
    console.log('To infinity');
  } else if (Number.isFinite(num) && num < 0){
    console.log('To negative infinity');
  } else {
    console.log('Staying home');
  }
}

beyond(0);


function decode(word) {
  switch (word[0]){
  case 'a':
    return word[1];
  case 'b':
    return word[2];
  case 'c':
    return word[3];
  case 'd':
    return word[4];
  default:
    return ' ';     
  }
}
console.log(decode('cable'));

function decodeWords(words) {
  return words.split(' ').map(word => decode(word)).join('');
}

console.log(decodeWords('craft block argon meter bells brown croon droop'));

/*
this string in decodeWords(words) is turned into an array
of strings when we use the split() method 
['craft', 'block', 'argon', 'meter', 'bells', 'brown', 'croon', 'droop']

now we map through the array, essentially it is a for loop that applies a condition 
to each word or item it iterates through. In this case we apply the decode(word) function to each
word in the new array of strings, which then gives us what you see below.
 f       o      r      _      l      o      o      p

 last we use the join() method to create a new string by concatenating all 
 of the elements in an array. finished product looks like this:
 for loop
 */