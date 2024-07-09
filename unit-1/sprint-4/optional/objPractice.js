let obj  = {}

let str  = 'asdfasdfsadf'
let arr = [1,3,4,5]


// for(let s of str){
//     console.log(s , obj[s] , obj  );
//     obj[s] ? obj[s]++ : obj[s] = 1
// }

str.split('').forEach((ele , i)=> {
    console.log(ele , i);
});

