let adhar = {
    name:'Aman Raj',
    addhaar: '1212121121212'
}
adhar.name = "aman"
Object.freeze(adhar)
adhar.addhaar = '111111111111111'

console.log(adhar);



return
let obj = { x: 1, y: 2 };
console.log(Object.keys(obj)); //[ 'x', 'y' ]
console.log(Object.values(obj)); //[ 1, 2 ]
console.log(Object.entries(obj)); //[ [ 'x', 1 ], [ 'y', 2 ] ]

// in key word
console.log("x" in obj); //true
console.log("y" in obj); //true
console.log("x" in obj); //false

// copy obj to another obj
let obj2 = {};
Object.assign(obj2, obj);

console.log(obj2);
obj.x = "a";
console.log(obj);
