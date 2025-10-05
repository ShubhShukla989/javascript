const newNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const myNum= newNum.reduce((acc,cur)=>{
    console.log(`acc value is ${acc} and cur value is ${cur}`);
    
    return acc + cur
}, 0)
console.log(myNum);
