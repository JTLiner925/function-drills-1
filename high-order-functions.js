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