const button = document.getElementById("myButton");
if (button) {
    button.onclick = () => alert("Clicked!");
} else {
    console.log("error");
}


const mydiv=document.getElementById("mydiv");
if(mydiv)
{
   mydiv.onmouseover=(evt)=>{
      console.log("you are in mydiv");
      console.log(evt.type); // event object type
   }
}
else{
   console.log("something went wrong");
}

// Example
const button1 = document.querySelector('#btn1'); // Ensure there is an element with id="myButton"
if (button1) {
    button1.addEventListener('click', () => {
        console.log('Button clicked!');
    });
} else {
    console.error('Element not found!');
}

const handler1=()=>{
   console.log("you are in handler1");
}

button1.addEventListener("click",()=>{
   console.log("you are in btn1");
})

button1.removeEventListener("click",handler1); // it will remove the eventlistener from the console

// btn1.addEventListener("click",()=>
//    console.log("you are in btn1")
// ); // same as btn1.addEventListener("click",())