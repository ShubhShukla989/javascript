// let myDate= new Date()

// console.log(typeof myDate);

// let myCreateDate = new Date(2020, 4,1)
// console.log(myCreateDate


// const myArray = new Array(1,2,3,4,5)
// console.log(myArray);

// console.log("a", myArray.slice(2,4));
// console.log("b", myArray);

// console.log("c", myArray.splice(2,4));
// console.log("d", myArray);

// const mySym = Symbol("my identifier")
// const JsUser={
//     name:"shubh",
//     age:18,
//     country:"India",
//     [mySym]:"mykey1"
// }


// console.log(JsUser[mySym])

// function one (){
//     // const username="shubh"

//     // function two (){
//     //     const website="yt"
//     //     console.log(username);
        
//     // }
//     // // console.log(website);
//     // two()
    
// }
// one()

// function addOne(num){
// return num + 1
// }
// console.log(addOne(5))

// const addTwo= function(num){
//     return num + 2
// }
// console.log(addTwo(5))

// const user ={
//     username:"shubh",
//     price:1000,
//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
        
//     }
// }
// user.welcomeMessage() 
// user.username="newShubh"
// user.welcomeMessage()
// function chai() {
//     let username="shubh"
//     console.log(this);
    
// }
// chai()
// function chai() {
//     console.log(this   );
    
// }
// chai()
// const chai = ()=>{
//     let username="shubh"
//     console.log(this);
// }
// chai()
// const addTwo = (num1,num2)=>{
//     return num1+num2

// }
// console.log(addTwo(5,10));


// (function chai(){
//     console.log(`hello world`);
// })();
// ((name)=>{
//     console.log(`hello from,${name}`);
// })("shubh");
// global execution context 
// function execution context
// eval execution
let var1=1
let var2=2
function addNumbers(num1,num2){
    let sum = num1 + num2
    return sum
}
let result = addNumbers(var1,var2)
let result2= addNumbers(5,10)
console.log(result);
console.log(result2);

const newArray =[1,2,3,4,5]
    const newArray2=[6,7,8,9,10]
const newArray3=newArray.concat(newArray2)
    console.log(newArray3);
