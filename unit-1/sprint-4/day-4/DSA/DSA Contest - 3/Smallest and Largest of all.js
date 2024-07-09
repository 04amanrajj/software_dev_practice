function smallestAndLargestOfAll(n, arr){
    let s= Infinity,b = -Infinity
    
    for(let i=0; i<n; i++){
        
        if(arr[i]<s) s=arr[i]
        
        if(arr[i]>b) b=arr[i]
    }
    console.log(s)
    console.log(b)
}
