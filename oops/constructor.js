// function greet(shubh){
//     console.log("Hello, World!",`shubh `);
// }

function Person(name,age){
    this.name= name;
    this.age= age;
}


function car (brand,model){
    this.brand= brand;
    this.model= model;
}

let myCar=new car("Toyota","2020");
// console.log(myCar);

let myNewCar=new car("Honda","2021");
// console.log(myNewCar);

function tea (type){
    this.type= type;
    this.describe=function(){
        return `This is a ${this.type} tea.`;
    }
}
let greenTea=new tea("Green");
//  console.log(greenTea.describe());

function Animal(species){
    this.species= species;

}
Animal.prototype.sound=function(){
    return `The ${this.species} makes a sound.`;
};
 let dog=new Animal("Dog");

// console.log(dog.sound());
let cat=new Animal("cat");

// console.log(cat.sound());

function Drink(name){
    if(!new.target){
       throw new Error("Must use new keyword to create an instance");
    }
    this.name= name;
}
let button= new Drink("Coffee");
 console.log(button);