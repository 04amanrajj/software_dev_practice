function playingWithArray(N, arr){
    let x = 0,y=0;
    for(let i=0; i<N; i++){
        if(arr[i]%2==0){
            x+=arr[i]
        }else{
            y+=arr[i]
        }
        
    }console.log(x*y)
}
