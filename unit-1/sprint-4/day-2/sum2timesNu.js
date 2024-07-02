//find sum of those number appers 2 times

let arr=[2,2,5,3,5,7,8]

    let obj={}
    for(let i=0; i<arr.length;i++){
        if(obj[arr[i]]==undefined){
            obj[arr[i]]=1
        }else{
            obj[arr[i]]++
        }
    }
    console.log(obj)
let sum =0
for (let i in obj) {
    if (obj[i]==2){
        sum+=Number(i)
    }
}
console.log(sum)
