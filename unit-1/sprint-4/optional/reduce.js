const arr = [1, 2, 3, 4, 5];

// let sum=arr.reduce(function(accumalate,currentValue){
//     console.log({accumalate,currentValue})
//     return accumalate+currentValue;
// })

let sum=arr.reduce((accumulator,currentValue)=>accumulator+currentValue)

console.log(sum)