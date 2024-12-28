let modebtn = document.querySelector("#mode");
let currmode = "light";
modebtn.addEventListener("click",()=>
{
    if(currmode=="light")
    {
        currmode="dark";
        console.log("mode is dark");
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("white");
    }
    else{
        currmode="light";
        console.log("mode is light");
        document.querySelector("body").classList.add("white");
        document.querySelector("body").classList.remove("dark");
    }
    // console.log("you are trying to change a mode");
})

