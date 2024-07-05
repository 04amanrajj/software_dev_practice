function feelGoodStrings(N,string){
    let str='aeiou',count=0
    for(let i=0; i<N; i++){
        for(let j=0; j<str.length; j++){
            if(string[i]==str[j])
            count++
        }
    }if(count>=N/2){
        console.log("Feel good!")
    }else{
        console.log("Feel bad!")
    }
}
