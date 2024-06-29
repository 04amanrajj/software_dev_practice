function isPlindrome(str){
    let  rs = ""

    for(let i = str.length -1;i>=0;i--) rs+=str[i]
    if(rs == str) console.log("yes"); 
    else console.log("no");

}


isPlindrome('ava')