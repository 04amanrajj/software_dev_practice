function minimumInArray(N,arr){
    let s=999;
    for(let i=0; i<N; i++){
        if(s>arr[i]){
            s=arr[i]
        }
    }console.log(s)
}
 minimumInArray(5,[1,2,3,4,5])