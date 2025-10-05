// if (2=="2") {
//     console.log("true");
//     console.log("hai bro");

    
// }else{
//     console.log("false");
//     console.log("nahi hai bro")
// }
// console.log("shubh");

// const balance=1000
// if (balance<1000) {
//     console.log("less than 1000");

// }else if(balance>1000){
//     console.log("more than 1000");
// }

// else if(balance===800){
//     console.log("exactly 800");
// }
// else{
//     console.log("exactly 1000");
// }
// const userLoggedIn=true
// const debitCard=true
// if(userLoggedIn && debitCard){
//     console.log("you can buy");
// }

//for loop
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element==5) {
//         console.log("5 is found");
//     }
//     console.log(element);
// }
// for (let i = 1; i <=10; i++) {
//     console.log(`outer loop:${i}`);
//    for (let j = 1; j <=10; j++) {
//     //  console.log(`inner loop value${j} and inner loop ${i}`)
//      console.log(i +'*' + j + '=' + i*j)
//    }
// }

// let myArray=["flash","batman","superman","ironman"]
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

//break and continue

// for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log("5 is found");
//         break;
//     }
//     console.log(`value of i is ${index}`);
    
    
// // }
// for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log("5 is found");
//         continue
//     }
//     console.log(`value of i is ${index}`);
    
    
// }

//  while loop
// let index=1
// while (index<=10) {
//     console.log(`value of index is ${index}`)
//     index++

// do while loop
// let score=1
// do {
//     console.log(`score is ${score}`);
//     score++
// } while (score<=10);


// // for of

// const arr = ["flash", "batman", "superman", "ironman"]
// for (const num of arr) {
//     console.log(num);
    
// }
// const greeting="hello world"
// for (const char of greeting) {
//     console.log(`Each char is ${char}`);


// }
//map

// const map = new Map()
// // map.set('name', 'john')
// map.set('age', 25)
// map.set('hobby', 'coding')
// console.log(map);

// for (const [key,value] of map) {
//     console.log(key,':-',value);
    
// // }
 const coding=["html","css","js","react","nodejs"]   
// coding.forEach((item,array,index) => {
//     console.log(item,array,index);
    
    
// });

// function printMe(item){
//     console.log(`item is ${item}`);
    
// }
// coding.forEach(printMe);

// coding.forEach((item)=>{

// })

const myCoding=[
    {name:"html",type:"markup"},
    {name:"css",type:"style"},
    {name:"js",type:"programming"},
    {name:"react",type:"library"},
    {name:"nodejs",type:"runtime"},
]

myCoding .forEach((item)=>{
    console.log(`name is ${item.name} and type is ${item.type}`)})