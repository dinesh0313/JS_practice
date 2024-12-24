let hello = (a, b) =>  {
    return a+b;
};
console.log(hello(6,7));

function countVowels(str)
{
    // let str= "hello" ;
    let count=0;
    for(let i=0; i<str.length; i++)
    {
        if(str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || str.charAt(i)=='o' || str.charAt(i)=='u')
        {
            count++;
        }
    }
    return count;
}
console.log(countVowels("hello how are you "));

//using arrow function

var countvowels=(str)=>{
    let count=0;
    for(let i=0; i<str.length; i++)
    {
        if(str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || str.charAt(i)=='o' || str.charAt(i)=='u')
        {
            count++;
        }
    }
    return count;
}

console.log(countVowels("hello"));


let arr=["rajasthan","delhi","mumbai"];
arr.forEach((val,idx,arr) => { 
    console.log(val.toUpperCase()+" "+idx,arr);
});

var arr1=[1,2,3,4];
arr1.forEach((val)=>{
    console.log(val**val);
});
