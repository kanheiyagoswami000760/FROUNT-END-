// function checkOdd(number) {
//   if (number % 2 !== 0) {
//     return "It is an odd number";
//   } else {
//     return "It is not an odd number";
//   }
// }

// console.log(checkOdd(5));
// console.log(checkOdd(10));
// const name  = "riya";
// const age = 22;
// console.log("hello ; my name is "+ name +"and i am "+ age +" years old.");
// console.log()


// const user ="Roman";
// const points =120;
// const message= "Hey "+ user +", you have "+ points + " points.";
// console.log(message);


const person ={
    firstName: "kanheiya",
    lastName: "goswami",
    age: 20,
    introdue :function(){
        console.log('Hey, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.' );
    }
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
person.introdue();

person.birthYear = 2025  - person.age;
person.birth = function () {
    console.log('I was born in ${this.birthYear}');
} 
console.log(person);
//

const fruits = ["apple", "banana", "mango", "orange", "grape"];

const [, secondFruit, , , fifthFruit] = fruits;

console.log(secondFruit);
console.log(fifthFruit);



