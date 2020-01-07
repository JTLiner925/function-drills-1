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
