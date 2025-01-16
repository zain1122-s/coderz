// var age=prompt("by your age you can konow you acn drive or not")



// if (age>1 && age<=5)
// console.log("you cannot derive car")

// else if(age>5 && age<=10)
//     console.log("are you kidding")

// else if(age>10 &""& age<=15)
//     console.log("you are near to teenager")
// else if(age>15 && age<=18)
//     console.log("still you cannot")
// else if(age>18 && age<=50)
//     console.log("ÿou can drive")
// else(age>=18)
// console.log("you can driverrr")


// // switch statement 

// let month=12

// switch (month){
//     case 0:
//     console.log("january")
//     case 1:
//         console.log("febery")
// }


// ----------------------
// Every:
// ----------------------
 const products = [
    {productId:123 , productName:"tab" , price:400000},
    {productId:124 , productName:"computer" , price:15000},
    {productId:125 , productName:"apple" , price:70000},
    {productId:126 , productName:"tv" , price:900},
    {productId:127 , productName:"fan" , price:990000},
]
const ress = products.every(function(product, index){
    return product.price<5000000
});
console.log(ress);
// -------------------------
let every = [
    {RollNumber: 1, fName: "shan", age: 14},
    {RollNumber: 2, fName: "ahmed", age: 25},
    {RollNumber: 3, fName: "khan", age: 16},
    {RollNumber: 4, fName: "anila", age: 17},
    {RollNumber: 5, fName: "kana", age: 12},
    {RollNumber: 6, fName: "kiran", age: 28},
    {RollNumber: 7, fName: "deep", age: 19},
]
 var data = every.every((a,b) => {
    return a.age<18
 });
console.log(data)
// --------------------------
// Some:
// --------------------------
const fName = [
    {productId:123 , productName:"watch" , price:600000},
    {productId:124 , productName:"window" , price:12000},
    {productId:125 , productName:"glass" , price:80000},
    {productId:126 , productName:"cup" , price:200},
    {productId:127 , productName:"LED" , price:20000},
]
var total = fName.some(function(c,d){
    return c.price<300000
});
console.log(total);
// ----------------------------
let some = [
    {RollNumber: 1, fName: "zain", age: 11},
    {RollNumber: 2, fName: "ehsan", age: 20},
    {RollNumber: 3, fName: "sartaj", age: 18},
    {RollNumber: 4, fName: "mush", age: 19},
    {RollNumber: 5, fName: "Jdadl", age: 16},
    {RollNumber: 6, fName: "aliyan", age: 22},
    {RollNumber: 7, fName: "amds", age: 17},
]
var g = some.some(function(i, d){
    return i.age<21
});
console.log(g)

    //  ----------------------------
    let reduce = [
        {RollNumber: 1, fName: "Ali", age: 11},
        {RollNumber: 2, fName: "khqn", age: 20},
        {RollNumber: 3, fName: "baqir", age: 18},
        {RollNumber: 4, fName: "baby", age: 19},
        {RollNumber: 5, fName: "Jallal", age: 16},
        {RollNumber: 6, fName: "basit", age: 22},
        {RollNumber: 7, fName: "shan", age: 17},
    ]
    var totalAge = reduce.reduce(function(a,b){
        return a + b.age
    },0)
    console.log(totalAge);
    
    // Sort:
    
    const pdts = [
            {productId:123 , productName:"Oven" , price:12},
            {productId:124 , productName:"Laptop" , price:8},
            {productId:125 , productName:"Aron" , price:2},
            {productId:126 , productName:"LED" , price:2},
            {productId:127 , productName:"Iphone" , price:6},
        ]
    var output = pdts.sort((a, p)=>{
            return a.price- p.price
    });
        console.log(output);
    // ----------------------------------
    let sort = [
        {RollNumber: 1, profil: "azin", age: 11},
        {RollNumber: 2, profil: "alam", age: 20},
        {RollNumber: 3, profil: "Ahemd", age: 18},
        {RollNumber: 4, profil: "allii", age: 19},
        {RollNumber: 5, profil: "Jamwdl", age: 16},
        {RollNumber: 6, profil: "Hadin", age: 22},
        {RollNumber: 7, profil: "whsan", age: 17},
    ]
    var names = sort.sort(function(d,g){
        return d.profil. localeCompare (g.fName);
    });
    console.log(names);




NEW












// Message shahzain alam




