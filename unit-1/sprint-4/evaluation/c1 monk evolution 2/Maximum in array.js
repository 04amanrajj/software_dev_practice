function maximumInArray(N,arr){
    let is= -Infinity
    for(let i=0; i<=arr.length; i++){
        if(is<arr[i]){
            is=arr[i]
        }
    }console.log(is)
}
