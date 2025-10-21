// inheritance in javascript

// let car={
//     make:"totyota",
//     model:2020,
//     start:function(){
//         return `this ${this.make} car got started in ${this.model} year.`;
//     }
// };
// // console.log(car.start());


// function Person(name,age){
//     this.name= name;
//     this.age= age;  
// }

// let john=new Person("John",30);
// // console.log(john.age);


// function Animal(species){
//     this.type=this.type;
//     Animal.prototype.speak= function(){
//         return `the${this.type}makes a sound`
//     }
// }
// Array.prototype.shubh=function(){
//     return `shubh ${this}`
// }
// let myArray=[1,2,3,4,5];
// // console.log(myArray.shubh())

// class Vehicle{
//     constructor(brand,model){
//         this.brand= brand;
//         this.model= model;
//     }
//     start(){
//         return `${this.brand}  ${this.model} model vehicle started.`;
//     }
// }

// // extends allows to inherit properties and methods from another class
// class Car extends Vehicle{
//   drive(){
//     return `${this.brand}  make ${this.model} model car is driving.`;
//   }
// }

// let myCar=new Car("Toyota","2020");
// console.log(myCar.start());
// console.log(myCar.drive());


// encapsulation

// class Bankaccount{
//     #balance=0;

//     deposit(amount){
//         this.#balance+=amount;
//         return this.#balance;
//     }

//     getBalance(){
//         return `$ ${this.#balance}`
//     }
// }
// let account = new Bankaccount();
// console.log(account.getBalance())

//abstraction

// class CoffeeMachine{
//     start(){
//         return `Coffee machine started.`;
//     }
//     brewCoffee(){
//         return `Brewing coffee...`;
//     }

//     pressStartButton(){
//        let msgOne= this.start();
//        let msgTwo= this.brewCoffee();
//        return `${msgOne}+${msgTwo}`;
//     }
// }
// let myMachine=new CoffeeMachine();
// //  console.log(myMachine.start());
// //  console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());


// polymorphism

// class Bird{
//     fly(){
//         return`flying...`
//     }
// }

//  class Penguin extends Bird{
//         fly(){
//         return `Penguins cannot fly.`
//      }
//   }
//   let bird= new Bird();
//   let penguin= new Penguin();
//   console.log(bird.fly());
//   console.log(penguin.fly());

// getters and setters

class Employee{
    constructor(name,salary){
        this.name= name;
        this._salary= salary;
    }
    get salary(){
        return `you are not allowed tp get salary`;
    }
    set salary(value){
        if(value<0){
            console.error("Salary cannot be negative");
        }
            else{
                this._salary=value;
             }
            }
}
let emp = new Employee("shubh",50000);
console.log(emp.salary);
