let users2 = [{ age: 19 }, { age: 20 }, { age: 32 }, { age: 12 }];

// let newArr2=users2.map((ele)=>{
//     return ele.age
// })

let newArr2 = users2.reduce((acc, item) => {
  acc.push(item.age);
  return acc;
}, []);

console.log(newArr2);
