let arr = [1, 2, 34, 43, 44];

// map , fileter,reduce ,forEach

// for of
// for(let a of arr) console.log(a);

//forEach : used for traversing with element and index its doesn;t return anything

let data = arr.forEach((ele, i) => {
  return { ele, i };
});

// console.log(data);

// filter  : its use to filter the value and return a array

data = arr.filter((value, index) => {
  if (value % 2 == 0) return value;
});

// console.log(data);

// map : its modfies the value and return in array

data = arr.map((ele, i) => {
  let obj = {};
  obj[i] = ele;
  return obj;
});

// console.log(data);

// reduce : is method with use to accumalate the value

data = arr.reduce((sum, ele) => {
  return sum += ele;
},200);

// console.log(data);

arr.sort((a,b) => b-a)

console.log(arr);