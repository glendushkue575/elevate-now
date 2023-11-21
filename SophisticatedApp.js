/* 
   Filename: SophisticatedApp.js
   Content: Implementation of a sophisticated application demonstrating various
   features including object-oriented programming, asynchronicity, and advanced
   data manipulation.
*/

// Class definition for a Person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Class definition for a Car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`Driving the ${this.brand} ${this.model}`);
  }
}

// Function to retrieve data from an API asynchronously
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Main function to execute the application
async function main() {
  const persons = [
    new Person('John Doe', 30, 'Male'),
    new Person('Jane Smith', 25, 'Female'),
    new Person('Bob Johnson', 40, 'Male'),
  ];

  persons.forEach((person) => {
    person.sayHello();
  });

  const car = new Car('Toyota', 'Camry', 2021);
  car.drive();

  try {
    const apiData = await fetchData();
    console.log('Fetched data:', apiData);
  } catch (error) {
    console.error('Unable to fetch data:', error);
  }

  // Complex data manipulation
  const numbers = [1, 2, 3, 4, 5];
  const squares = numbers.map((num) => num * num);
  const sum = squares.reduce((acc, curr) => acc + curr, 0);
  console.log('Sum of squares:', sum);
}

main();