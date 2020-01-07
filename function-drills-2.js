

function jediName(firstName, lastName){
//   const first = firstName.slice(0,2);
//   const last = lastName.slice(0,3);
//   return `${last}${first}`;
//   can use either method...the one below is more concise
  return `${lastName.slice(0,3)}${firstName.slice(0,2)}`;
}

  const jedi = jediName('John', 'Liner');
  console.log(jedi);
