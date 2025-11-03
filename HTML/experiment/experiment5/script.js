// // console.log("hello world");
// alert("Welcome to Experiment 5!");
// const userName = prompt("Please enter your age:");

// alert("Hello, " + userName + "you are eligible voter.");
let age = prompt("Enter your age:");

age >= 18
  ? (alert("You are eligible to vote!"), 
     document.write("<p>You are eligible to vote!</p>"))
  : (alert("You are not eligible yet."));
