function createGreeting(name, age){
  const yearOfBirth =  2019 - age;
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}`;
}
//variable is invoking function, capturing returned value, and logging it out.
// const greeting1 = createGreeting();
// console.log(greeting1);
console.log(createGreeting('JT',37));