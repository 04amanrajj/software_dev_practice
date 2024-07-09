function averageOfAll(n, arr){
    let sum=0;
    for(let i=0; i<n; i++){
        sum+=arr[i]
    }
    let avg=0
    avg=sum/n 
    console.log(avg)
}
