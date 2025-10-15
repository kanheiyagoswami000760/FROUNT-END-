//let age = 25;

//age = Number(age);

//if (age >= 13 && age <= 18) {
 // console.log("You are a teenager.");
//} else if (age > 18) {
  console.log("You are an adult.");
//} else {
 // console.log("You are not a teenager or an adult.");
//}
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}
