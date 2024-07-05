function oddnum(a){
    if(a%3==0){
        return true
    }else{
        return false
    }
}

for( let i=0; i<=100; i++){
    let ans= (oddnum(i))
    if(ans==true)
        console.log(i,"is divisible by 3")
}
