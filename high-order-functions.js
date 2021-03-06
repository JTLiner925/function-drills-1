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

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return location => {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const manholeWarning = hazardWarningCreator('Manhole Cover Uncovered');
const godzillaWarning = hazardWarningCreator('Godzilla on the Loose');

rocksWarning('Main St');
rocksWarning('Smith Ave');
godzillaWarning("King's Road");

// console.log(`The ${typeOfWarning} has triggered ${warningCounter} ${warningCounter === 1 ? 'time' : 'times'}.`);