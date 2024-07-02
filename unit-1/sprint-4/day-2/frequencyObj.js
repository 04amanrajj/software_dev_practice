let arr=[1,1,2,5,6,7,7,8,7]

let obj={}

for(let i=0; i<arr.length;i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1
    }else{
        obj[arr[i]]++
    }
}
console.log(obj)