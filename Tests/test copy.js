function VehicleFac(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}


var car = new VehicleFac("Honda", "white", "2010", "UK");
console.log(car);



class Vehicle {
    constructor(model, color, year, country){
        this.model = model;
        this.color = color;
        this.year = year;
        this.country = country;
    } 
    getmodel  () {
        return this.model
    }

}


var car1 = new Vehicle("Honda", "white", "2010", "UK");
console.log(car1.getmodel());
