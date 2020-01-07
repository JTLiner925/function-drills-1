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

function monthDays(month, leapYear) {
  let numOfDays;

  switch (month){
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    numOfDays = 31;
    break;

  case 'April':
  case 'June':
  case 'September':
  case 'November':
    numOfDays = 30;
    break;

  case 'February':
    numOfDays = leapYear ? 29 : 28;
    break;
    
  default:
    throw new Error('Must provide a valid month.');  
  }
  return `${month} has ${numOfDays} days.`;
}
console.log(monthDays('February', true));
/*
create let numOfDays that is essentially empty. Using Switch/case
in the first set if the month is ... then the numOfDays is 31.
Second set same but numOfDays is 30.
third we write a ternary to state that numOfDays is 28 unless it's a 
leapYear and then it's 29.
We also set the default to throw an error message if input doesn't match. 
This is more concise than write the if/throw-try/catch.
*/

function playGame(playerGuess) {

  function numToWord(num) {
    switch(num) {
    case 1:
      return 'rock';
    case 2:
      return 'scissors';
    case 3:
      return 'paper';
    default:
      throw new Error('Must pick number between 1-3');
    }
  }


  const aiGuess = Math.floor(Math.random() * 3) + 1;

  const playerWord = numToWord(playerGuess);
  const aiWord = numToWord(aiGuess);

  if (playerGuess === aiGuess) {
    return `It's a tie! Both players guessed ${playerWord}.`;
  } else if (
    (playerGuess === 1 && aiGuess === 2) ||
    (playerGuess === 2 && aiGuess === 3) ||
    (playerGuess === 3 && aiGuess === 1)
  ) {
    return `Player wins! Player had ${playerWord} against ${aiWord}`;
  } else {
    return `AI wins! AI had ${aiWord} agains ${playerWord}`;
  }

}
console.log(playGame(2));