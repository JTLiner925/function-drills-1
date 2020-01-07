function createGreeting(name, age){
  const yearOfBirth =  getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}`;
}
//took const yearOfBirth out of createGreeting and made it it's own function
//when I put the new value in the template literal that was returned in 
// createGreeting I needed to age the paranthesis and age (37)

//actually*** I realized to make yearOfBirth = to new function and then I only need 
//the one input of age in the console.log statement.
function getYearOfBirth(age){
  return 2019 - age;
}
//variable is invoking function, capturing returned value, and logging it out.
// const greeting1 = createGreeting();

// console.log(greeting1);
console.log(createGreeting('JT',37));