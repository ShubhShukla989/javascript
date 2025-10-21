let car={
    make:"totyota",
    model:2020,
    start:function(){
        return `this ${this.make} car got started in ${this.model} year.`;
    }
};
// console.log(car.start());


function Person(name,age){
    this.name= name;
    this.age= age;  
}

let john=new Person("John",30);
// console.log(john.age);


function Animal(species){
    this.type=this.type;
    Animal.prototype.speak= function(){
        return `the${this.type}makes a sound`
    }
}
Array.prototype.shubh=function(){
    return `shubh ${this}`
}
let myArray=[1,2,3,4,5];
// console.log(myArray.shubh())

class Vehicle{
    constructor(brand,model){
        this.brand= brand;
        this.model= model;
    }
    start(){
        return `${this.brand}  ${this.model} model vehicle started.`;
    }
}

// extends allows to inherit properties and methods from another class
class Car extends Vehicle{
  drive(){
    return `${this.brand}  make ${this.model} model car is driving.`;
  }
}

let myCar=new Car("Toyota","2020");
console.log(myCar.start());
console.log(myCar.drive());

