let alpha = {}


for(let i = 0 ;i< 26;i++) alpha[String.fromCharCode(i+97)] =  String.fromCharCode(i+65)
for(let i = 0 ;i< 26;i++) alpha[String.fromCharCode(i+65)] =  String.fromCharCode(i+97)


    let str = 'aBcdEf'
    let ans =  ''
    for(let  s of str){
        ans+= alpha[s]

    }
// console.log(ans);


