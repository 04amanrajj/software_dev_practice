let details={
    name:"aman",
    age:19,
    location:"India",
    hobbies:['cycling','coding','reading'],

    print:function(){
        console.log("My Name is",this.name)
        console.log("I'm",this.age,"years old");
        console.log("I'm from",this.location);
        console.log("My hobbies are",this.hobbies.join())
    }
}
details.print();
