let obj ={
    Name: "aman",
    Age: 19,
    Location: "india"
}
//update
obj['Name'] = "Aman Raj"

//add
obj['Address'] = "Rajasthan"

//delete
delete obj['Location']

console.log(obj);

for( let x in obj){
    console.log(x+'-'+obj[x])
}
