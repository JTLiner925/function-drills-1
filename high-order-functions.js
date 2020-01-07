function repeat(fn, n){
  for (let i=0; i<n; i++){
    fn();
  }
}

function sayHello (){
  console.log('Hello world');
}

function sayGoodbye (){
  console.log('Goodbye world');
}

repeat(sayGoodbye, 5);



function filter(arr, fn) {
  const newArray = [];
  for(let i=0; i<arr.length; i++) {
    const currentElement = arr[i];
    if (fn(currentElement) === true ) {
      newArray.push(currentElement);
    }
  }
  return newArray;
  // TASK: Define your function here
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Roe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean

  //   bonus one-liner:
  // console.log(filter(names, name => name[0] === 'R'));
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES