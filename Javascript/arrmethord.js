//find
const arr = [1, 2, 3, 4, 66, 99, 5 , 6 ,33];


const answer = arr.find ( num  => {
    return num > 10;
});
console.log(answer);



//filter 

const arr = [1, 2, 3, 4, 66, 99, 5 , 6 ,33];


const ans = arr.filter ( num  => {
    return num > 10;
});
console.log(ans);


//map

const arr = [1, 2, 3, 4, 66, 99, 5 , 6 ,33];

 const newArr = arr.map(num, index ) => {
    return num*index
    };

console.log(newArr);




