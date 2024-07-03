function checkPalindrome(N, str) {
    let r=""
    for(let i=N-1; i>=0; i--){
        r+=str[i]
        
    }
    
    if(r==str){
        console.log("Yes")
    }else{
        console.log("No")
    }
}

checkPalindrome(5,'naman')
