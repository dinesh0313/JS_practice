//Js is dynamically typed language that supports the following features
//1.primitive types is immutable
//     string, int, long, float, null, boolean, double 

var x="how are you ";
console.log(x);
console.log(typeof(x));

var x=true;
console.log(typeof(x));

var x="keerti";
var y=x;
var x="shreya";
console.log(x);
console.log(y);





//2.reference types  is mutable
//     objects, arrays, function
const student ={
    name :"dinesh",
    age:22,
    email : "prajapatidinesh313@gmail.com",
    phone : "1234567890",
    address : "pune",
    city : "pune",
    state : "maharashtra",
    country : "india",
    pincode : "123456",
    is_active : true,
    is_deleted : false,
}
console.log(student);
console.log(typeof(student));
console.log(student.pincode);


var p={
    name :"dinesh"
}
var q=p;
p.name="shreya";
console.log(p);
console.log(q);

// 3.arrays 
// arrays are objects

var languages =["hindi","english","gujarati",true,null];
console.log(languages);
console.log(languages[0]);
console.log(typeof(languages));


//4.Function

function feild(name){
    console.log("feild is "+name)
}
feild("developer");


//5.Execution of JS has 2 phases
// first phase is => memory phase - variables environment 
// second phase is => code execution 
// is called hoisting

var a;
console.log(a);
a =10;
console.log(this.a);


//6. types of variables
//let and const are block level variables
//var is function level variable
// console.log(z);
// const z=10;
// var b=20;
// let c=30;

function is1()
{
    let z1=10;
    console.log(z1);
}
  is1();


//higher order function
function sum(w,e)
{
    return w+e;
}

function sum3(sum2,w,e)
{
    return sum2(w,e);
}
console.log(sum3(sum,2,3));


//arrow functions
var sum4=(a,b)=>{
    return a+b;
}

sum4(23,56);