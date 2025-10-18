// let myVals = [1,2,3]
// console.log(myVals);



// __ bunder prototype__

let computer={cpu:"4"}
let lenovo ={screen:"HD",
    __proto__:computer
}
// console.log(lenovo.cpu);

let genrationCar={tyres:"5"
}
let teslaCar={driver:"AI"}

Object.setPrototypeOf(teslaCar,genrationCar)

console.log(`tesla:`,Object.getPrototypeOf( teslaCar));

