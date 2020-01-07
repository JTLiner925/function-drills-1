function getYearOfBirth(age){
  return 2019 - age;
}

function createGreeting(name, age){
  if (name === undefined || age === undefined){
    throw new Error('Arguments not valid.');
  }

  if (age < 0){
    throw new Error('Age can not be negative.');
  }

  if (typeof age !== 'number') {
    throw new TypeError('Age must be a number.');
  }


  const yob =  getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yob}`;
}
//took const yearOfBirth out of createGreeting and made it it's own function
//when I put the new value in the template literal that was returned in 
// createGreeting I needed to age the paranthesis and age (37)

//actually*** I realized to make yearOfBirth = to new function and then I only need 
//the one input of age in the console.log statement.

//variable is invoking function, capturing returned value, and logging it out.
try {
  const greeting1 = createGreeting('JT', 37);
  console.log(greeting1);
} catch(e) {
  console.error(e.message);
}