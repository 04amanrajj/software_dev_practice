function stockValue(n,arr){
    let sum=0,bull=-Infinity
    for(let i=0; i<arr.length; i++){
        sum+=arr[i]
        if(bull<sum){
            bull=sum
        }
    }console.log(bull)
}
