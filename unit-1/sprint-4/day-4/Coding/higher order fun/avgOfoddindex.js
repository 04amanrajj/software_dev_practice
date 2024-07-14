let arr = [10, 24, 56, 72, -10, -88, 100, 564];
//  let sum=0,count=0
// for(let i=0;i<arr.length;i++){
//     if(i%2!==0){
//         sum+=arr[i]
//         count++
//     }
// }sum=sum/count
// console.log(sum)

// let sum=0
// let avg=arr.filter((arr))

// let arr = [10, 24, 56, 72, -10, -88, 100, 564];

//   let total = 0;
// let avrageOfodd = arr.filter(function(item,index){
//   return index%2!==0
// });

// let sum = 0;

// for(let i in avrageOfodd){
//   sum+=avrageOfodd[i]
// }
// console.log(sum/avrageOfodd.length)

let avg = arr.filter(arr);

let avgOdd = arr.filter(function (item, index) {
  return index % 2 != 0;
});

let sum = 0;
for (let i in avgOdd) {
  sum += avgOdd[i];
}

console.log(sum / avgOdd);
