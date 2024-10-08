//question-1
const greeter = (myArray, counter) => {
    const greetText = 'Hello ';
    for (const name of myArray) {
      console.log(`${greetText}${name}`);
    }
  };
  
  greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);



//question-2
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

console.log(capitalize('fooBar'));  // Output: Foobar
console.log(capitalize('nodeJs'));  // Output: Nodejs


//question-3
const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors); 


//question-4
const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20); 


//question-5
const array = [1, 2, 3, 4];

const calculateSum = array.reduce((sum, current) => sum + current, 0);
const calculateProduct = array.reduce((product, current) => product * current, 1);

console.log(calculateSum);      // Output: 10
console.log(calculateProduct);  // Output: 24


//question-6
class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
  
    details() {
      return `Model: ${this.model} Engine ${this.year}`;
    }
  }
  
  class Sedan extends Car {
    constructor(model, year, balance) {
      super(model, year); // Pass model and year to the Car class constructor
      this.balance = balance;
    }
  
    info() {
      return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
  }
  
 
  const car2 = new Car('Pontiac Firebird', 1976);
  console.log(car2.details()); 
  
  const sedan = new Sedan('Volvo SD', 2018, 30000);
  console.log(sedan.info());   
  
