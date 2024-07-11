let arr = [10, 24, 56, 72, -10, -88, 100, 564];
 let sum=0,count=0
for(let i=0;i<arr.length;i++){
    if(i%2!==0){
        sum+=arr[i]
        count++
    }
}sum=sum/count
console.log(sum)