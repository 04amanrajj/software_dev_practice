let person={
    firstname:"Aman",
    sayname:function(){console.log("i am Pro",this.firstname)}
}

let student={
    mark:99,
    saymark:function(){console.log("I got ",this.mark)}
}

let masai={
    favSub:"JS"
}

Object.setPrototypeOf(student,person)
Object.setPrototypeOf(masai,student)
console.log(masai.sayname())

