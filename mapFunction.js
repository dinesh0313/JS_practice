let arr=[1,2,3,4,5];
 
arr.map((val)=>{
    console.log("  "+val);
})


let newArr=arr.map((val)=>{
    return val*val;
})

console.log(" "+newArr);